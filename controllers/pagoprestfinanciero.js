const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getAbonadoPrest = require('../data/getAbonadoPrest');
const getAbonadoPrestDollar = require('../data/getAbonadoPrestDollar');


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
    attributes: [[Sequelize.fn('', Sequelize.col('Prestfinanciero.id')), 'id'],[Sequelize.fn('', Sequelize.col('Prestfinanciero.monto')), 'monto'],[Sequelize.fn('', Sequelize.col('Prestfinanciero.moneda')), 'moneda'],[Sequelize.fn('', Sequelize.col('Prestfinanciero.fecha')), 'fecha'],[Sequelize.fn('SUM', Sequelize.col('pagoprestfinancieros.efectivo')), 'efectivo'],[Sequelize.fn('SUM', Sequelize.col('pagoprestfinancieros.banco')), 'banco'],[Sequelize.fn('SUM', Sequelize.col('pagoprestfinancieros.fueradCaja')), 'fueradCaja'],[Sequelize.fn('SUM', Sequelize.col('pagoprestfinancieros.dollar')), 'dollar']], 
    include: [{model: models.Pagoprestfinanciero, as: 'pagoprestfinancieros', attributes:[]}],
    raw: true,
    order: Sequelize.literal('id DESC')
}).map((bill) => {
    let abonado = 0;
    if (bill.moneda === 1){
    abonado = bill.efectivo + bill.banco + bill.fueradCaja;
}
 if (bill.moneda === 2){
     abonado = bill.dollar;
}
    const saldo = bill.monto - abonado;
    return{
        id: bill.id,
        monto: bill.monto,
        moneda: bill.moneda,
        fecha: bill.fecha,
        efectivo: bill.efectivo,
        banco: bill.banco,
        fueradCaja: bill.fueradCaja,
        dollar: bill.dollar,
        saldo: saldo,                        
    }
});

res.render('pagos/pagoprestfinancieros/index.ejs', {billConditions, financiera, caja});
} catch(error){
    next(error);
}
}

// GET /pagoprestfinancieros/:prestfinancieroId/show
exports.show = async (req, res, next) => {
    const {prestfinanciero} = req.load;
    
    const pagos = await models.Pagoprestfinanciero.findAll({
        where:{
            prestfinancieroId: {
                [Op.eq]:prestfinanciero.id,
            }
        },
        include:[{
            model: models.Caja,
            as: "pertCajPaf",
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
            author: pago.pertCajPaf.author.username,
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
    const financieraId = prestfinanciero.financieraId;
    const monto = prestfinanciero.monto;
    const estatus = 0;
    let dollar = 0;
    abonado = parseFloat(efectivo) + parseFloat(banco) + parseFloat(fueradCaja);
    if (moneda === 1) {
    const abonadoTotal = await getAbonadoPrest(pago.id);
    abonado += abonadoTotal;
}
   if (moneda === 2) {
    dollar = abonado / tasa;
    const abonadoTotal = await getAbonadoPrestDollar(pago.id);
    abonado = abonadoTotal + dollar;
}
   
    if (abonado <= monto){
        pagoprestfinanciero = models.Pagoprestfinanciero.build({ efectivo, banco, fueradCaja, dollar, tasa, observaciones, fecha, estatus, prestfinancieroId, cajaId });
    }

    try {
        if (abonado <= monto){
            pagoprestfinanciero = await pagoprestfinanciero.save();
            res.json({ message:'Pago creado Exitosamente.', refresh: `pagoprestfinancieros/${financieraId}` });
        } else {
            res.json({ message:'Error el saldo es menor al abono.', refresh: `pagoprestfinancieros/${financieraId}` });
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



// DELETE /pagoprestfinancieros/:pagoprestfinancieroId
exports.destroy = async (req, res, next) => {
 const { pagoprestfinanciero } = req.load;
 const { caja } = req.load;

 try {
    await req.load.pagoprestfinanciero.destroy();
    req.flash('success', 'Pago Eliminado Exitosamente.');
    res.redirect("/cajas/" + caja.id + "/pagos");
} catch (error) {
    next(error);
}
};


