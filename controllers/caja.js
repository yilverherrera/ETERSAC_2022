const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");

const moment = require('moment');

const paginate = require('../helpers/paginate').paginate;


// Autoload el quiz asociado a :cajaId
exports.load = async (req, res, next, cajaId) => {
    try {
        const caja = await models.Caja.findByPk(cajaId);
        if (caja) {
            req.load = { ...req.load, caja };
            next();
        } else {
            throw new Error('There is no caja with id=' + cajaId);
        }
    } catch (error) {
        next(error);
    }
};


// MW - Un usuario sólo puede crear 1 caja al dia.
exports.limitPerDay = async (req, res, next) => {

    const LIMIT_PER_DAY = 1;

    let countOptions = {
        where: {
            authorId: req.loginUser.id,
            createdAt: { [Op.gte]: moment().subtract(1, 'days').toDate() }
        }
    };

    try {
        const count = await models.Caja.count(countOptions);

        if (count < LIMIT_PER_DAY) {
            next();
        } else {
            req.flash('error', `Maximo ${LIMIT_PER_DAY} nuevas cajas por día.`);
            res.redirect('/goback');
        }
    } catch (error) {
        next(error);
    }
};


// MW that allows actions only if the user logged in is admin or is the author of the caja.
exports.adminOrAuthorRequired = (req, res, next) => {

    const isAdmin = !!req.loginUser.isAdmin;
    const isAuthor = req.load.caja.authorId === req.loginUser.id;

    if (isAdmin || isAuthor) {
        next();
    } else {
        console.log('Prohibited operation: The logged in user is not the author of the caja, nor an administrator.');
        res.send(403);
    }
};


// GET /cajas
exports.index = async (req, res, next) => {

    let findOptions = {
        where: {},
        include: []
    };

    let title = "Cajas";

    // Search:

    // If there exists "req.load.user", then only the cajas of that user are shown
    if (req.load && req.load.user) {

        findOptions.where.authorId = req.load.user.id;

        if (req.loginUser && req.loginUser.id === req.load.user.id) {
            title = "Mis Cajas";
        } else {
            title = "Cajas de " + req.load.user.username;
        }
    }

    findOptions.include.push({
        model: models.Despacho,
        as: 'pertDesCaj'
    });

    try {
        const cajas = await models.Caja.findAll(findOptions);
        res.render('cajas/index.ejs', {
            cajas,
            title
        });
    } catch (error) {
        next(error);
    }
};


// GET /cajas/:cajaId
exports.show = async (req, res, next) => {

    const { caja } = req.load;

    try {
        res.render('cajas/show', { caja });
    } catch (error) {
        next(error);
    }
};


// GET /cajas/new
exports.new = async (req, res, next) => {
        let findOptions = {
            where: {},
            include: []
        };
        findOptions.include.push({
            model: models.Rout,
            as: 'pertRouDes'
        });
        if (req.loginUser) {
            findOptions.include.push({
                model: models.User,
                as: "users",
                where: { id: req.loginUser.id }
            });
        }
        const despachos = await models.Despacho.findAll(findOptions);
        const caja = {
            fecha: ""
        };
        if (despachos.length>0) {
            res.render('cajas/new', {
                caja,
                despachos
            });
        } else {
            res.redirect('/users/' + req.loginUser.id + '/cajas');
            req.flash('error', 'No estás asignado a un Despacho');
        }
   
};

// POST /cajas/create
exports.create = async (req, res, next) => {

    const { despacho, fecha } = req.body;
    const authorId = req.loginUser && req.loginUser.id || 0;
    const despachoId = despacho;
    const rout = await models.Despacho.findByPk(despachoId);
    const routId = rout.routId;
    
    let caja = models.Caja.build({ fecha, authorId, despachoId, routId });

    try {
        // Saves only the fields question and answer into the DDBB
        caja = await caja.save({ fields: ["fecha", "authorId", "despachoId", "routId"] });
        req.flash('success', 'Caja creada Satisfactoriamente.');
        res.redirect('/users/' + authorId + '/cajas');

    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario');
            error.errors.forEach(({ message }) => req.flash('error', message));
            res.render('cajas/new', { caja });
        } else {
            req.flash('error', 'Error creando la nueva Caja: ' + error.message);
            next(error)
        }
    }
};

// GET /cajas/:cajaId/edit
exports.edit = async (req, res, next) => {

    const { caja } = req.load;

    despachoIds = [];

    despachoIds.push(caja.despachoId);

    let findOptions = {
        where: {},
        include: []
    };
    findOptions.include.push({
        model: models.Rout,
        as: 'pertRouDes'
    });

    const despachos = await models.Despacho.findAll(findOptions);

    res.render('cajas/edit', { caja, despachos, despachoIds });
};

// PUT /cajas/:cajaId
exports.update = async (req, res, next) => {

    const { body } = req;
    const { caja } = req.load;
    const authorId = req.loginUser && req.loginUser.id || 0;

    caja.despachoId = body.despacho;
    caja.fecha = body.fecha;

    try {
        await caja.save({ fields: ["fecha", "despachoId"] });
        req.flash('success', 'Caja editada Satisfactoriamente.');

        res.redirect('/cajas');

    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({ message }) => req.flash('error', message));
            res.render('cajas/edit', { caja });
        } else {
            req.flash('error', 'Error editando la caja: ' + error.message);
            next(error);
        }
    }
};


// DELETE /cajas/:cajaId
exports.destroy = async (req, res, next) => {
    
    try {
        await req.load.caja.destroy();
        req.flash('success', 'Caja borrada Satisfactoriamente.');
        res.redirect('/cajas');
    } catch (error) {
        req.flash('error', 'Error borrando la caja: ' + error.message);
        next(error);
    }
};

