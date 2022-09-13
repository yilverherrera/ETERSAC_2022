const { and } = require("sequelize");
const Sequelize = require("sequelize");
const { models } = require("../models");

// Autoload el unidad asociado a :unidadId
exports.load = async (req, res, next, unidadId) => {

    try {
        const unidad = await models.Unidad.findByPk(unidadId);
        if (unidad) {
            req.load = { ...req.load, unidad };
            next();
        } else {
            throw new Error('No hay unidad con id=' + unidadId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /unidads
exports.index = async (req, res, next) => {

    try {
        const unidads = await models.Unidad.findAll();
        res.render('unidads/index', { unidads });
    } catch (error) {
        next(error);
    }
};


// GET /unidads/:unidadId
exports.show = (req, res, next) => {

    const { unidad } = req.load;

    res.render('unidads/show', { unidad });
};


// GET /unidads/new
exports.new = async (req, res, next) => {

    const unidad = {
        codigo: "",
        placa: "",
        marca: "",
        modelo: "",
        ano: "",
        routId: "",
        propietarioId: ""
    };

    const routs = await models.Rout.findAll();
    const propietarios = await models.Propietario.findAll();

    if ((routs.length > 0)&&(propietarios.length>0)) {
        res.render('unidads/new', { unidad, routs, propietarios });
    } else {
        res.redirect('/unidads');
        req.flash('error', 'No hay rutas y/o propietarios registrados');
    }
};

// POST /unidads/create
exports.create = async (req, res, next) => {

    const { codigo, placa, marca, modelo, ano, routId, propietarioId } = req.body;

    let unidad = models.Unidad.build({
        codigo,
        placa,
        marca,
        modelo,
        ano,
        routId,
        propietarioId
    });

    try {
        // Saves only the fields codigo, placa, marca, modelo, ano, rutaId, propietarioId into the DDBB
        unidad = await unidad.save({ fields: ["codigo", "placa", "marca", "modelo", "ano", "routId", "propietarioId"] });
        res.redirect('/unidads/' + unidad.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({ message }) => console.log(message));
            res.render('unidads/new', { unidad });
        } else {
            next(error);
        }
    }
};


// GET /unidads/:unidadId/edit
exports.edit = async (req, res, next) => {

    const { unidad } = req.load;

    const routs = await models.Rout.findAll();
    const propietarios = await models.Propietario.findAll();

    res.render('unidads/edit', { unidad, routs, propietarios });
};


// PUT /unidads/:unidadId
exports.update = async (req, res, next) => {

    const { body } = req;
    const { unidad } = req.load;

    rout.codigo = body.codigo;
    rout.placa = body.placa;
    rout.marca = body.marca;
    rout.modelo = body.modelo;
    rout.ano = body.ano;
    rout.routId = body.routId;
    rout.propietarioId = body.propietarioId
    try {
        await unidad.save({ fields: ["codigo", "placa", "marca", "modelo", "ano", "routId", "propietarioId"] });
        res.redirect('/unidads/' + unidad.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({ message }) => console.log(message));
            res.render('unidads/edit', { unidad });
        } else {
            next(error);
        }
    }
};


// DELETE /unidads/:unidadId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.unidad.destroy();
        res.redirect('/unidads');
    } catch (error) {
        next(error);
    }
};
