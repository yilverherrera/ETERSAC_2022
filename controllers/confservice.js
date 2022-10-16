const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el confservice asociado a :confserviceId
exports.load = async (req, res, next, confserviceId) => {

    try {
        const confservice = await models.Confservice.findByPk(confserviceId);
        if (confservice) {
            req.load = {...req.load, confservice};
            next();
        } else {
            throw new Error('There is no confservice with id=' + confserviceId);
        }
    } catch (error) {
        next(error);
    }
};

// GET /confservice
exports.index = async (req, res, next) => {

    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Service,
            as: "pertSerCser"
        });

        findOptions.include.push({
            model: models.Grupo,
            as: "pertGruCser"
        });

        const confservices = await models.Confservice.findAll(findOptions);

        res.render('confservices/index.ejs', {confservices});
    } catch (error) {
        next(error);
    }

};

// GET /confservices/new
exports.new = async (req, res, next) => {

    const grupos = await models.Grupo.findAll();
    const services = await models.Service.findAll();

    const confservice =
    {
        monto: 0,
        detalle: 0,
        vuelta: 0,
        serviceId: 0,
        grupoId: 0,
    };

    res.render('confservices/new', { confservice, services, grupos });

};

// POST /confservices/create
exports.create = async (req, res, next) => {

    const {monto, detalle, vuelta, serviceId, grupoId} = req.body;
    
    let confservice = models.Confservice.build({ monto, detalle, vuelta, serviceId, grupoId });

    try {
        // Saves only the fields name into the DDBB
        confservice = await confservice.save();
        req.flash('success', 'Configuración del Servicio creada Exitosamente.');
        res.redirect('/confservices');
        
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('confservice/new', {despacho});
        } else {
            req.flash('error', 'Error creating a new Confservice: ' + error.message);
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

