const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getSumPagoNomina = require("../data/getSumPagoNomina");
const getSumPagoPrestamo = require("../data/getSumPagoPrestamo");
const getSalario = require("../data/getSalario");

// Autoload el pagonomina asociado a :pagonominaId
exports.load = async (req, res, next, pagonominaId) => {
    try {
        const pagonomina = await models.Pagonomina.findByPk(pagonominaId);
        if (pagonomina) {
            req.load = {...req.load, pagonomina};
            next();
        } else {
            throw new Error('There is no pagonomina with id=' + pagonominaId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /nominas
exports.index = async (req, res, next) => {

    try {

     

        const nominas = await models.Nomina.findAll({
            include:[{
                model: models.Quincena,
                as: "pertQuiNom"
            },
            {
                model: models.Empleado,
                as: "pertEmpNom",
            }]
        });

        res.render('nominas/index.ejs', {nominas});
    } catch (error) {
        next(error);
    }

};

// GET /nominas/:nominaId/pagos/show
exports.show = async (req, res, next) => {
    const {nomina} = req.load;
    
    const pagos = await models.Pagonomina.findAll({
        where:{
            nominaId: {
                [Op.eq]:nomina.id,
            }
        },
        include:[{
            model: models.Caja,
            as: "pertCajPan",
            include:[{
                model: models.User,
                as: "author",
            }]
        }]
    }).map( (pago) => {
        return{
            monto: pago.monto,
            fecha: pago.fecha,
            author: pago.pertCajPan.author.username,
        }
    });
    res.json(pagos);
};


// GET /nominas/new
exports.new = async (req, res, next) => {

    const quincenas = await models.Quincena.findAll({
    	where:{
    		isCreate:{
    			[Op.eq]: false,
    		}
    	},
    	order: [['id','DESC']]
    });
    const empleados = await models.Empleado.findAll({
    	where:{
    		isActive:{
    			[Op.eq]: true,
    		}
    	}
    });

    const nomina = {
    	quincenaId: 0,
    	empleadoId: 0
    }


    res.render('nominas/new', { nomina, quincenas, empleados});

};



// POST nominas/:nominaId/pagos/create
exports.create = async (req, res, next) => {

    const pagoNom = req.body;
    const {caja} = req.load;
    let {nomina} = req.load;
    const efectivo = pagoNom.efectivo;
    let totalPago = nomina.totalPago;
    const fecha = caja.fecha;

    try{
     let salario = await getSalario(nomina.empleadoId);
     let sumPagos = await getSumPagoNomina(nomina.id);
     let sumPrestamos = await getSumPagoPrestamo(nomina.id);
     const montoSalario = salario.monto;



     sumPagos += parseFloat(efectivo) + sumPrestamos + nomina.montoFalta;

     if (sumPagos <= montoSalario){
        totalPago =  totalPago - efectivo;
     
        nomina.totalPago = totalPago;

     await nomina.save({
        fields:[
        "totalPago",
        ],
     });

     let pagonomina = await models.Pagonomina.build({
        monto: efectivo,
        fecha: fecha,
        nominaId: nomina.id,
        cajaId: caja.id,
     });

     pagonomina = await pagonomina.save();

    res.json({ message:'Pago nomina creado Exitosamente.', refresh: `quincenas/${nomina.quincenaId}` });
} else {
    res.json({message:`Errror el pago es mayor al saldo`, refresh: `quincenas/${nomina.quincenaId}` })
}
}catch(error){
    if (error instanceof Sequelize.ValidationError){
        res.json({message: "Error, no se pudo crear la nómina"});
    }else{
          next(error)
    }

}

    
   
    
};




// DELETE /anticipos/:anticipoId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.anticipo.destroy();
        req.flash('success', 'Anticipo Eliminada Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/anticipos");
    } catch (error) {
        next(error);
    }
};


