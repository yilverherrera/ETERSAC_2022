const { and } = require("sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");

const paginate = require('../helpers/paginate').paginate;

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

    let countOptions = {};
    let findOptions = {};

    // Search:
    const search = req.query.search || '';
    if (search) {
        const search_like = "%" + search.replace(/ +/g, "%") + "%";

        countOptions.where = { placa: { [Op.like]: search_like } };
        findOptions.where = { placa: { [Op.like]: search_like } };
    }

    try {
        const count = await models.Unidad.count(countOptions);

        // Pagination:

        const items_per_page = 20;

        // The page to show is given in the query
        const pageno = parseInt(req.query.pageno) || 1;

        // Create a String with the HTMl used to render the pagination buttons.
        // This String is added to a local variable of res, which is used into the application layout file.
        res.locals.paginate_control = paginate(count, items_per_page, pageno, req.url);

        findOptions.offset = items_per_page * (pageno - 1);
        findOptions.limit = items_per_page;

        const unidads = await models.Unidad.findAll(findOptions);
        res.render('unidads/index', { unidads, search });
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

    if ((routs.length > 0) && (propietarios.length > 0)) {
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
        req.flash('success', 'Unidad Creada Exitosamente.');
        res.redirect('/unidads/' + unidad.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('unidads/new', { unidad });
        } else {
            req.flash('error', 'Error creando nueva Unidad: ' + error.message);
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

    unidad.codigo = body.codigo;
    unidad.placa = body.placa;
    unidad.marca = body.marca;
    unidad.modelo = body.modelo;
    unidad.ano = body.ano;
    unidad.routId = body.routId;
    unidad.propietarioId = body.propietarioId
    try {
        await unidad.save({ fields: ["codigo", "placa", "marca", "modelo", "ano", "routId", "propietarioId"] });
        req.flash('success', 'Unidad Actualizada Exitosamente.');
        res.redirect('/unidads/' + unidad.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('unidads/edit', { unidad });
        } else {
            req.flash('error', 'Error Editando nueva Unidad: ' + error.message);
            next(error);
        }
    }
};


// DELETE /unidads/:unidadId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.unidad.destroy();
        req.flash('success', 'Unidad Eliminada Exitosamente.');
        res.redirect('/unidads');
    } catch (error) {
        next(error);
    }
};
