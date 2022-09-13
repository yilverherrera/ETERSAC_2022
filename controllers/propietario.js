const Sequelize = require("sequelize");
const {models} = require("../models");

// Autoload el propietario asociado a :propietarioId
exports.load = async (req, res, next, propietarioId) => {

    try {
        const propietario = await models.Propietario.findByPk(propietarioId);
        if (propietario) {
            req.load = {...req.load, propietario};
            next();
        } else {
            throw new Error('No hay propietario con id=' + propietarioId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /propietarios
exports.index = async (req, res, next) => {

    try {
        const propietarios = await models.Propietario.findAll();
        res.render('propietarios/index', {propietarios});
    } catch (error) {
        next(error);
    }
};


// GET /propietarios/:propietarioId
exports.show = (req, res, next) => {

    const {propietario} = req.load;

    res.render('propietarios/show', {propietario});
};


// GET /propietarios/new
exports.new = (req, res, next) => {

    const propietario = {
        nombre: "",
        telefono: "",
        ruc: ""
    };

    res.render('propietarios/new', {propietario});
};

// POST /propietarios/create
exports.create = async (req, res, next) => {

    const {nombre, telefono, ruc} = req.body;

    let propietario = models.Propietario.build({
        nombre,
        telefono,
        ruc
    });

    try {
        // Saves only the fields nombre, telefono, ruc into the DDBB
        propietario = await propietario.save({fields: ["nombre", "telefono", "ruc"]});
        res.redirect('/propietarios/' + propietario.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({message}) => console.log(message));
            res.render('propietarios/new', {propietario});
        } else {
            next(error);
        }
    }
};


// GET /propietarios/:propietariosId/edit
exports.edit = (req, res, next) => {

    const {propietario} = req.load;

    res.render('propietario/edit', {propietario});
};


// PUT /propietario/:propietarioId
exports.update = async (req, res, next) => {

    const {body} = req;
    const {propietario} = req.load;

    propietario.nombre = body.nombre;
    propietario.telefono = body.telefono;
    propietario.ruc = body.ruc;

    try {
        await propietario.save({fields: ["nombre", "telefono", "ruc"]});
        res.redirect('/propietarios/' + propietario.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({message}) => console.log(message));
            res.render('propietarios/edit', {propietario});
        } else {
            next(error);
        }
    }
};


// DELETE /propietarios/:propietarioId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.propietario.destroy();
        res.redirect('/propietarios');
    } catch (error) {
        next(error);
    }
};

