const Sequelize = require("sequelize");
const {models} = require("../models");

// Autoload el empresa asociado a :empresaId
exports.load = async (req, res, next, empresaId) => {

    try {
        const empresa = await models.Empresa.findByPk(empresaId);
        if (empresa) {
            req.load = {...req.load, empresa};
            next();
        } else {
            throw new Error('No hay empresa con id=' + empresaId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /empresas
exports.index = async (req, res, next) => {

    try {
        const empresas = await models.Empresa.findAll();
        res.render('empresas/index', {empresas});
    } catch (error) {
        next(error);
    }
};


// GET /empresas/:empresaId
exports.show = (req, res, next) => {

    const {empresa} = req.load;

    res.render('empresas/show', {empresa});
};


// GET /empresas/new
exports.new = (req, res, next) => {

    const empresa = {
        ruc: "",
        razon: "",
        direccion: ""
    };

    res.render('empresas/new', {empresa});
};

// POST /empresas/create
exports.create = async (req, res, next) => {

    const {ruc, razon, direccion} = req.body;

    let empresa = models.Empresa.build({
        ruc,
        razon,
        direccion
    });

    try {
        // Saves only the fields ruc, razon and direccion into the DDBB
        empresa = await empresa.save({fields: ["ruc", "razon", "direccion"]});
        req.flash('success', 'Empresa Creada Exitosamente.');
        res.redirect('/empresas/' + empresa.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('empresas/new', {empresa});
        } else {
            req.flash('error', 'Error creando nueva Empresa: ' + error.message);
            next(error);
        }
    }
};


// GET /empresas/:empresaId/edit
exports.edit = (req, res, next) => {

    const {empresa} = req.load;

    res.render('empresas/edit', {empresa});
};


// PUT /empresas/:empresaId
exports.update = async (req, res, next) => {

    const {body} = req;
    const {empresa} = req.load;

    empresa.ruc = body.ruc;
    empresa.razon = body.razon;
    empresa.direccion = body.direccion;

    try {
        await empresa.save({fields: ["ruc", "razon", "direccion"]});
        req.flash('success', 'Empresa Actualizada Exitosamente.');
        res.redirect('/empresas/' + empresa.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('empresas/edit', {empresa});
        } else {
            req.flash('error', 'Error Editando nueva Empresa: ' + error.message);
            next(error);
        }
    }
};


// DELETE /empresas/:empresaId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.empresa.destroy();
        req.flash('success', 'Empresa Eliminada Exitosamente.');
        res.redirect('/empresas');
    } catch (error) {
        next(error);
    }
};

