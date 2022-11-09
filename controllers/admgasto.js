const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el admgasto asociado a :admgastoId
exports.load = async (req, res, next, admgastoId) => {

    try {
        const admgasto = await models.Admgasto.findByPk(admgastoId);
        if (admgasto) {
            req.load = {...req.load, admgasto};
            next();
        } else {
            throw new Error('There is no admgasto with id=' + admgastoId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /admgastos
exports.index = async (req, res, next) => {

    const { caja } = req.load;

    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Categadm,
            as: "pertCatAdm"
        });

        findOptions.where.cajaId = caja.id;

        const admgastos = await models.Admgasto.findAll(findOptions);

         const despacho = await models.Despacho.findByPk(caja.despachoId);

    if (despacho) {
      res.locals.lcDespacho = despacho.name;
      res.locals.lcFecha = caja.fecha;
    }

        res.render('admgastos/index.ejs', {admgastos, caja});
    } catch (error) {
        next(error);
    }

};

// GET /admgastos/:admgastoId
exports.show = async (req, res, next) => {

    const {admgasto} = req.load;
    const categadm = await models.Categadm.findByPk(admgasto.categadmId);

    res.render('admgastos/show', {admgasto, categadm});
};

// GET /admgastos/new
exports.new = async (req, res, next) => {

    const categadms = await models.Categadm.findAll();
    const {caja} = req.load;

    const admgasto =
    {
        efectivo: 0,
        observaciones: "",
        categadmId: "",
        cajaId: caja.id  
    };

    res.render('admgastos/new', { admgasto, categadms});

};

// POST /admgastos/create
exports.create = async (req, res, next) => {

    const {efectivo, observaciones, categadmId} = req.body;
     const categadms = await models.Categadm.findAll();
    const {caja} = req.load;
    const fecha = caja.fecha;
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


