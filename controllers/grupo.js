const { and } = require("sequelize");
const Sequelize = require("sequelize");
const { models } = require("../models");

// Autoload el grupo asociado a :grupoId
exports.load = async (req, res, next, grupoId) => {

    try {
        const grupo = await models.Grupo.findByPk(grupoId);
        if (grupo) {
            req.load = { ...req.load, grupo };
            next();
        } else {
            throw new Error('No hay grupo con id=' + grupoId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /grupos
exports.index = async (req, res, next) => {

    try {
        const grupos = await models.Grupo.findAll();
        res.render('grupos/index', { grupos });
    } catch (error) {
        next(error);
    }
};


// GET /grupos/:grupoId
exports.show = (req, res, next) => {

    const { grupo } = req.load;

    res.render('grupos/show', { grupo });
};


// GET /grupos/new
exports.new = async (req, res, next) => {

    const grupo = {
        nombre: "",
        descripcion: "",
        isEmpresa: "",
        showCaja: "",
        showAutAdm: "",
        allRuta: "",
        empresaId: "",
        routId: ""
    };
    const allUnidads = await models.Unidad.findAll();

    const grupoUnidadsIds = await grupo.getUnidads().map(unidad => unidad.id);

    const routs = await models.Rout.findAll();

    const empresas = await models.Empresa.findAll();

    if ((routs.length > 0) && (empresas.length > 0)) {
        res.render('grupos/new', { grupo, routs, empresas, allUnidads, grupoUnidadsIds });
    } else {
        res.redirect('/grupos');
        req.flash('error', 'No hay rutas y/o empresas registrados');
    }
};

// POST /grupos/create
exports.create = async (req, res, next) => {

    const { nombre, descripcion, isEmpresa, showCaja, showAutAdm, allRuta, empresaId, routId } = req.body;

    let grupo = models.Grupo.build({
        nombre,
        descripcion,
        isEmpresa,
        showCaja,
        showAutAdm,
        allRuta,
        empresaId,
        routId
    });

    const routs = await models.Rout.findAll();
    const empresas = await models.Empresa.findAll();

    try {
        // Saves only the fields nombre, descripcion, isEmpresa, showCaja, showAutAdm, allRuta, empresaId, routId into the DDBB
        grupo = await grupo.save({ fields: ["nombre", "descripcion", "isEmpresa", "showCaja", "showAutAdm", "allRuta", "empresaId", "routId"] });
        res.redirect('/grupos/' + grupo.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({ message }) => console.log(message));
            res.render('grupos/new', { grupo, routs, empresas });
        } else {
            next(error);
        }
    }
};


// GET /grupos/:grupoId/edit
exports.edit = async (req, res, next) => {

    const { grupo } = req.load;

    const allUnidads = await models.Unidad.findAll();

    const grupoUnidadsIds = await grupo.getUnidads().map(unidad => unidad.id);

    const routs = await models.Rout.findAll();

    const empresas = await models.Empresa.findAll();

    res.render('grupos/edit', { grupo, routs, empresas, allUnidads, grupoUnidadsIds });
};


// PUT /grupos/:grupoId
exports.update = async (req, res, next) => {

    const { nombre, descripcion, isEmpresa, showCaja, showAutAdm, allRuta, empresaId, routId, unidadsIds = [] } = req.body;
    const { grupo } = req.load;
    const routs = await models.Rout.findAll();
    const empresas = await models.Empresa.findAll();
    grupo.nombre = nombre.trim();
    grupo.descripcion = descripcion;
    grupo.isEmpresa = isEmpresa;
    grupo.showCaja = showCaja;
    grupo.showAutAdm = showAutAdm;
    grupo.allRuta = allRuta;
    grupo.empresaId = empresaId
    grupo.routId = routId;
    try {
        await grupo.save({ fields: ["nombre", "descripcion", "isEmpresa", "showCaja", "showAutAdm", "allRuta", "empresaId", "routId"] });
        await grupo.setUnidads(unidadsIds);
        res.redirect('/grupos/' + grupo.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({ message }) => console.log(message));
            res.render('grupos/edit', { grupo, routs, empresas });
        } else {
            next(error);
        }
    }
};


// DELETE /grupos/:grupoId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.grupo.destroy();
        res.redirect('/grupos');
    } catch (error) {
        next(error);
    }
};
