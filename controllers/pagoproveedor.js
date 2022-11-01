const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


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

// GET /pagoproveedors/:pagoproveedorId
exports.show = async (req, res, next) => {

    const {pagoproveedor} = req.load;
    const busgasto = await models.Busgasto.findByPk(pagoproveedor.busgastoId);
    const detbusgastos = await models.Detbusgasto.findAll({
        where:{
            busgastoId: {
        [Op.eq]:pagoproveedor.busgastoId
    }
    }
        });

    res.render('pagoproveedors/show', {pagoproveedor, busgasto, detbusgastos});
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

// POST /admgastos/create
exports.create = async (req, res, next) => {

    const {efectivo, observaciones, categadmId} = req.body;
     const categadms = await models.Categadm.findAll();
    const {caja} = req.load;
    const fecha = caja.fecha.toISOString().split("T")[0];
    const monto = efectivo;
    const cajaId = caja.id;
    const estatus = 0;
    
    let admgasto = models.Admgasto.build({ monto, observaciones, fecha, estatus, categadmId, cajaId });

    try {
        // Saves only the fields name into the DDBB
        admgasto = await admgasto.save();
        req.flash('success', 'Gasto Administrativo creado Exitosamente.');
        res.redirect('/cajas/' + caja.id + '/admgastos');
        
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('admgastos/new', {admgasto, categadms});
        } else {
            req.flash('error', 'Error creating a new Gasto Administrativo: ' + error.message);
            next(error)
        }
    }        
    
};



// DELETE /admgastos/:admgastoId
exports.destroy = async (req, res, next) => {
     const { caja } = req.load;

    try {
        await req.load.admgasto.destroy();
        req.flash('success', 'Gasto Administrativo Eliminado Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/admgastos");
    } catch (error) {
        next(error);
    }
};


