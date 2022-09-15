const Sequelize = require("sequelize");
const {models} = require("../models");

const paginate = require('../helpers/paginate').paginate;

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
        const count = await models.Propietario.count();

        // Pagination:

        const items_per_page = 20;

        // The page to show is given in the query
        const pageno = parseInt(req.query.pageno) || 1;

        // Create a String with the HTMl used to render the pagination buttons.
        // This String is added to a local variable of res, which is used into the application layout file.
        res.locals.paginate_control = paginate(count, items_per_page, pageno, req.url);

        const findOptions = {
            offset: items_per_page * (pageno - 1),
            limit: items_per_page
        };

        const propietarios = await models.Propietario.findAll(findOptions);
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
        req.flash('success', 'Propietario Creado Exitosamente.');
        res.redirect('/propietarios/' + propietario.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('propietarios/new', {propietario});
        } else {
            req.flash('error', 'Error creando nuevo Propietario: ' + error.message);
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
        req.flash('success', 'Propietario Actualizado Exitosamente.');
        res.redirect('/propietarios/' + propietario.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('propietarios/edit', {propietario});
        } else {
            req.flash('error', 'Error Editando nuevo Propietario: ' + error.message);
            next(error);
        }
    }
};


// DELETE /propietarios/:propietarioId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.propietario.destroy();
        req.flash('success', 'Propietario Eliminado Exitosamente.');
        res.redirect('/propietarios');
    } catch (error) {
        next(error);
    }
};

