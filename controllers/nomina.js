const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getPrestamoPersons = require('../data/getPrestamoPersons');
const getSalario = require('../data/getSalario');


// Autoload el nomina asociado a :nominaId
exports.load = async (req, res, next, nominaId) => {
    try {
        const nomina = await models.Nomina.findByPk(nominaId);
        if (nomina) {
            req.load = {...req.load, nomina};
            next();
        } else {
            throw new Error('There is no anticipo with id=' + nominaId);
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



// POST /nominas/create
exports.create = async (req, res, next) => {

    const nomina = req.body;
    let fecha = new Date().toISOString().split("T")[0];

    try{
    const quincena = await models.Quincena.findByPk(nomina.quincenaId);
    const diasQuincena = quincena.nDias;

    nomina.empleadosIds.forEach(async(emp) => {
    let prestIds = "";
    let prestTotal = 0;
    const prestamos = await getPrestamoPersons(emp);

    prestamos.forEach((prest)=>{
        const numCuota = prest.contado + 1;
        prestIds += `Prest#:${prest.id} Monto:${prest.monto} Monto Cuota:${prest.cuota} Cuota#:${numCuota}// `;
        prestTotal += prest.cuota;
    });

    const salario = await getSalario(emp, diasQuincena);

    let totalPago = salario.monto - prestTotal;

    let nominaEmpleados = models.Nomina.build({
        diasFalta: 0,
        diaSalario: salario.diaSalario,
        montoFalta: 0,
        diasFaltaDescripcion: "",
        bono: 0,
        dctoPrestamoIds: prestIds,
        dctoPrestamoTotal: prestTotal,
        totalPago: totalPago,
        quincenaId: nomina.quincenaId,
        empleadoId: emp,
    });

     nominaEmpleados = await nominaEmpleados.save();

     const nominaId = nominaEmpleados.id;

     prestamos.forEach(async(prest)=>{
    let pagoPrestaEmp = models.Pagoprespersona.build({
        monto: prest.cuota,
        fecha: fecha,
        prestamopersonaId: prest.id,
        nominaId: nominaId,
    });

    pagoPrestaEmp = await pagoPrestaEmp.save();
    });

     quincena.isCreate = true;

     await quincena.save({
        fields:[
        "isCreate",
        ],
     });

	});
    res.json({ message:'Nómina creada Exitosamente.', refresh: `nominas` });
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


