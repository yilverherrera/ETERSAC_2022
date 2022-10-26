const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el anticipo asociado a :anticipoId
exports.load = async (req, res, next, anticipoId) => {

    try {
        const anticipo = await models.Anticipo.findByPk(anticipoId);
        if (anticipo) {
            req.load = {...req.load, anticipo};
            next();
        } else {
            throw new Error('There is no anticipo with id=' + anticipoId);
        }
    } catch (error) {
        next(error);
    }
};

// GET /anticipo
exports.index = async (req, res, next) => {

    const { caja } = req.load;

    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Unidad,
            as: "pertUniAnt"
        });

        findOptions.where.cajaId = caja.id;

        const anticipos = await models.Anticipo.findAll(findOptions);

        res.render('anticipos/index.ejs', {anticipos, caja});
    } catch (error) {
        next(error);
    }

};

// GET /anticipos/:anticiposId
exports.show = (req, res, next) => {

    const {anticipo} = req.load;

    res.render('anticipos/show', {anticipo});
};

// GET /anticipos/new
exports.new = async (req, res, next) => {

    const unidads = await models.Unidad.findAll();
    const {caja} = req.load;

    const anticipo =
    {
        efectivo: 0,
        unidadId: 0,
        cajaId: caja.id  
    };

    res.render('anticipos/new', { anticipo, unidads});

};

// POST /anticipos/create
exports.create = async (req, res, next) => {

    const {efectivo, unidadId} = req.body;
    const unidads = await models.Unidad.findAll();
    const {caja} = req.load;
    const fecha = caja.fecha.toISOString().split("T")[0];
    const monto = efectivo;
    const cajaId = caja.id;
    const saldo = efectivo;
    
    let anticipo = models.Anticipo.build({ monto, fecha, saldo, unidadId, cajaId });

    try {
        // Saves only the fields name into the DDBB
        anticipo = await anticipo.save();
        req.flash('success', 'Anticipo creado Exitosamente.');
        res.redirect('/cajas/' + caja.id + '/anticipos');
        
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('anticipo/new', {anticipo, unidads, caja});
        } else {
            req.flash('error', 'Error creating a new Anticipo: ' + error.message);
            next(error)
        }
    }        
    
};

// GET /confservices/:confserviceId/edit
exports.edit = async (req, res, next) => {

    const {confservice} = req.load;

    const grupos = await models.Grupo.findAll({
        where: {
            id: {
                [Op.eq]: confservice.grupoId
            }
        }
    });
    const services = await models.Service.findAll({
        where: {
            id: {
                [Op.eq]: confservice.serviceId
            }
        }
    });

    res.render('confservices/edit', {confservice, services, grupos});
};

// PUT /confservice/:confserviceId
exports.update = async (req, res, next) => {

    const {confservice} = req.load;
    
    const {monto, detalle, vuelta, serviceId, grupoId} = req.body;

    confservice.monto = monto;
    confservice.detalle = detalle;
    confservice.vuelta = vuelta;
    confservice.serviceId = serviceId;
    confservice.grupoId = grupoId;

    try {
        await confservice.save({fields: ["monto", "detalle", "vuelta", "serviceId", "grupoId"]});    
        req.flash('success', 'Configuración del Servicio Actualizada Exitosamente.');
        res.redirect('/confservices');
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'There are errors in the form:');
            error.errors.forEach(({message}) => req.flash('error', message));
            const grupos = await models.Grupo.findAll();
            const services = await models.Service.findAll();
            res.render('confservices/edit', {confservice, services, grupos});
        } else {
            req.flash('error', 'Error editing the confservice: ' + error.message);
            next(error);
        }

    }
};

// DELETE /anticipos/:anticipoId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.anticipo.destroy();
        req.flash('success', 'Anticipo Eliminada Exitosamente.');
        res.redirect('/anticipos');
    } catch (error) {
        next(error);
    }
};


