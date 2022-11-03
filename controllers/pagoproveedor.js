const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getAbonado = require('../data/getAbonado');


// Autoload el pagoproveedor asociado a :pagoproveedorId
exports.load = async (req, res, next, pagoproveedorId) => {

    try {
        const pagoproveedor = await models.Pagoproveedor.findByPk(pagoproveedorId);
        if (pagoproveedor) {
            req.load = {...req.load, pagoproveedor};
            next();
        } else {
            throw new Error('There is no pago de proveedor with id=' + pagoproveedorId);
        }
    } catch (error) {
        next(error);
    }
};


exports.index = async (req, res, next) => {
    const {proveedor, caja} = req.load;
    
    try {
       const billConditions = await models.Busgasto.findAll({
        where: {
          proveedorId: {
            [Op.eq]: proveedor.id,
        },
        tipoPago:{
            [Op.eq]: 'credito',
        }
    },
    group:['Busgasto.id'], 
    attributes: [[Sequelize.fn('', Sequelize.col('Busgasto.id')), 'id'],[Sequelize.fn('', Sequelize.col('Busgasto.monto')), 'monto'],[Sequelize.fn('', Sequelize.col('Busgasto.abonado')), 'abonado'],[Sequelize.fn('', Sequelize.col('Busgasto.doc')), 'doc'],[Sequelize.fn('', Sequelize.col('Busgasto.fecha')), 'fecha'],[Sequelize.fn('SUM', Sequelize.col('busgastos.efectivo')), 'efectivo'],[Sequelize.fn('SUM', Sequelize.col('busgastos.banco')), 'banco'],[Sequelize.fn('SUM', Sequelize.col('busgastos.fueradCaja')), 'fueradCaja']], 
    include: [{model: models.Pagoproveedor, as: 'busgastos', attributes:[]}],
    raw: true,
    order: Sequelize.literal('id DESC')
}).map((bill) => {
    const abonado = bill.abonado + bill.efectivo + bill.banco + bill.fueradCaja;
    const saldo = bill.monto - abonado;
    return{
        id: bill.id,
        monto: bill.monto,
        doc: bill.doc,
        fecha: bill.fecha,
        efectivo: bill.efectivo,
        banco: bill.banco,
        fueradCaja: bill.fueradCaja,
        saldo: saldo,                        
    }
});

res.render('pagos/pagoproveedors/index.ejs', {billConditions, proveedor, caja});
} catch(error){
    next(error);
}
}

// GET /pagoproveedors/:busgastoId/show
exports.show = async (req, res, next) => {
    const {busgasto} = req.load;
    
    const pagos = await models.Pagoproveedor.findAll({
        where:{
            busgastoId: {
                [Op.eq]:busgasto.id,
            }
        },
        include:[{
            model: models.Caja,
            as: "pertCajPag",
            include:[{
                model: models.User,
                as: "author",
            }]
        }]
    }).map( (pago) => {
        return{
            efectivo: pago.efectivo,
            banco: pago.banco,
            fueradCaja: pago.fueradCaja,
            fecha: pago.fecha,
            observaciones: pago.observaciones,
            author: pago.pertCajPag.author.username,
        }
    });
    res.json(pagos);
};

// GET /pagoproveedors/new
exports.new = async (req, res, next) => {

    const proveedors = await models.Proveedor.findAll();
    const {caja} = req.load;

    const admgasto =
    {
        monto: 0,
        observaciones: "",
        cajaId: caja.id  
    };

    res.render('pagoproveedors/new', { pagoproveedor, proveedors});

};

// POST /pagoproveedors/create
exports.create = async (req, res, next) => {

    const pago = req.body;
    const {caja} = req.load;


    let abonado = 0;
    let pagoproveedor;
    

    const busgasto = await models.Busgasto.findByPk(pago.id);
    
    const efectivo = pago.efectivo;
    const banco = pago.banco;
    const fueradCaja = pago.fueradCaja;
    const observaciones = pago.observaciones;
    const fecha = caja.fecha;
    const estatus = 0;
    const proveedorId = busgasto.proveedorId;
    const busgastoId = pago.id;
    const cajaId = caja.id;
    const monto = busgasto.monto;
    abonado = parseFloat(efectivo) + parseFloat(banco) + parseFloat(fueradCaja);

    const abonadoTotal = await getAbonado(pago.id);
    abonado += abonadoTotal;

    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log(abonado);
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    
    if (abonado <= monto){
        pagoproveedor = models.Pagoproveedor.build({ efectivo, banco, fueradCaja, observaciones, fecha, estatus, proveedorId, busgastoId, cajaId });
    }

    try {
        if (abonado <= monto){
            pagoproveedor = await pagoproveedor.save();
            res.json({ message:'Pago creado Exitosamente.', refresh: `pagoproveedors/${proveedorId}` });
        } else {
            res.json({ message:'Error el saldo es menor al abono.', refresh: `pagoproveedors/${proveedorId}` });
        }
        
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            res.json({ message:'Hay errores en el formulario:' });
            res.json({ message: error.message });
        } else {
            res.json({ message: error.message });
            next(error)
        }
    }        
    
};



// DELETE /pagoproveedors/:pagoproveedorId
exports.destroy = async (req, res, next) => {
 const { pagoproveedor } = req.load;
 const { caja } = req.load;

 try {
    await req.load.pagoproveedor.destroy();
    req.flash('success', 'Pago Eliminado Exitosamente.');
    res.redirect("/cajas/" + caja.id + "/pagos");
} catch (error) {
    next(error);
}
};


