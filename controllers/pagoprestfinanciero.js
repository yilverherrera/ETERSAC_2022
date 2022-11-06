const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getAbonadoPrest = require('../data/getAbonadoPrest');


// Autoload el pagoprestfinanciero asociado a :pagoprestfinancieroId
exports.load = async (req, res, next, pagoprestfinancieroId) => {

    try {
        const pagoprestfinanciero = await models.Pagoprestfinanciero.findByPk(pagoprestfinancieroId);
        if (pagoprestfinanciero) {
            req.load = {...req.load, pagoprestfinanciero};
            next();
        } else {
            throw new Error('There is no pago de pagoprestfinanciero with id=' + pagoprestfinancieroId);
        }
    } catch (error) {
        next(error);
    }
};


exports.index = async (req, res, next) => {
    const {financiera, caja} = req.load;
    
    try {
       const billConditions = await models.Prestfinanciero.findAll({
        where: {
          financieraId: {
            [Op.eq]: financiera.id,
        },
    },
    group:['Prestfinanciero.id'], 
    attributes: [[Sequelize.fn('', Sequelize.col('Prestfinanciero.id')), 'id'],[Sequelize.fn('', Sequelize.col('Prestfinanciero.monto')), 'monto'],[Sequelize.fn('', Sequelize.col('Prestfinanciero.moneda')), 'moneda'],[Sequelize.fn('', Sequelize.col('Prestfinanciero.fecha')), 'fecha'],[Sequelize.fn('SUM', Sequelize.col('pagoprestfinancieros.efectivo')), 'efectivo'],[Sequelize.fn('SUM', Sequelize.col('pagoprestfinancieros.banco')), 'banco'],[Sequelize.fn('SUM', Sequelize.col('pagoprestfinancieros.fueradCaja')), 'fueradCaja']], 
    include: [{model: models.Pagoprestfinanciero, as: 'pagoprestfinancieros', attributes:[]}],
    raw: true,
    order: Sequelize.literal('id DESC')
}).map((bill) => {
    const abonado = bill.efectivo + bill.banco + bill.fueradCaja;
    const saldo = bill.monto - abonado;
    return{
        id: bill.id,
        monto: bill.monto,
        moneda: bill.moneda,
        fecha: bill.fecha,
        efectivo: bill.efectivo,
        banco: bill.banco,
        fueradCaja: bill.fueradCaja,
        saldo: saldo,                        
    }
});

res.render('pagos/pagoprestfinancieros/index.ejs', {billConditions, financiera, caja});
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

// POST /pagoprestfinancieros/create
exports.create = async (req, res, next) => {

    const pago = req.body;
    const {caja} = req.load;

    let pagoprestfinanciero;
    let abonado = 0;
    

    const prestfinanciero = await models.Prestfinanciero.findByPk(pago.id);
    
    const efectivo = pago.efectivo;
    const banco = pago.banco;
    const fueradCaja = pago.fueradCaja;
    const observaciones = pago.observaciones;
    const moneda = prestfinanciero.moneda;
    const tasa = pago.tasa;
    const fecha = caja.fecha;
    const prestfinancieroId = pago.id;
    const cajaId = caja.id;
    const monto = prestfinanciero.monto;
    abonado = parseFloat(efectivo) + parseFloat(banco) + parseFloat(fueradCaja);
    let abonadoMoneda = moneda === 1 ? abonado : abonado/tasa;

    const abonadoTotal = await getAbonadoPrest(pago.id);
    abonadoMoneda += abonadoTotal;

   
    if (abonadoMoneda <= monto){
        pagoprestfinanciero = models.Pagoprestfinanciero.build({ efectivo, banco, fueradCaja, observaciones, fecha, estatus, prestfinancieroId, cajaId });
    }

    try {
        if (abonadoMoneda <= monto){
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


