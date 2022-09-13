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
        res.redirect('/empresas/' + empresa.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({message}) => console.log(message));
            res.render('empresas/new', {empresa});
        } else {
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
        res.redirect('/empresas/' + empresa.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.log('Hay un error en el formulario:');
            error.errors.forEach(({message}) => console.log(message));
            res.render('empresas/edit', {empresa});
        } else {
            next(error);
        }
    }
};


// DELETE /empresas/:empresaId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.empresa.destroy();
        res.redirect('/empresas');
    } catch (error) {
        next(error);
    }
};

