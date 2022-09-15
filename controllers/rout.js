const Sequelize = require("sequelize");
const { models } = require("../models");

// Autoload el rout asociado a :routId
exports.load = async (req, res, next, routId) => {

    try {
        const rout = await models.Rout.findByPk(routId);
        if (rout) {
            req.load = { ...req.load, rout };
            next();
        } else {
            throw new Error('No hay ruta con id=' + routId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /routs
exports.index = async (req, res, next) => {

    try {
        const routs = await models.Rout.findAll();
        res.render('routs/index', { routs });
    } catch (error) {
        next(error);
    }
};


// GET /routs/:routId
exports.show = (req, res, next) => {

    const { rout } = req.load;

    res.render('routs/show', { rout });
};


// GET /routs/new
exports.new = async (req, res, next) => {

    const rout = {
        codigo: "",
        nombre: "",
        parNorte: "",
        posNorte: "",
        parSur: "",
        posSur: ""
    };

    const empresas = await models.Empresa.findAll();

    if (empresas.length > 0) {
        res.render('routs/new', { rout, empresas });
    } else {
        res.redirect('/routs');
        req.flash('error', 'No hay empresas registradas');
    }
};

// POST /routs/create
exports.create = async (req, res, next) => {

    const { codigo, nombre, parNorte, posNorte, parSur, posSur, empresaId } = req.body;

    let rout = models.Rout.build({
        codigo,
        nombre,
        parNorte,
        posNorte,
        parSur,
        posSur,
        empresaId
    });

    try {
        // Saves only the fields codigo, nombre, parNorte, posNorte, parSur, posSur and empresaId into the DDBB
        rout = await rout.save({ fields: ["codigo", "nombre", "parNorte", "posNorte", "parSur", "posSur", "empresaId"] });
        req.flash('success', 'Ruta Creada Exitosamente.');
        res.redirect('/routs/' + rout.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('routs/new', { rout });
        } else {
            req.flash('error', 'Error creando nueva Ruta: ' + error.message);
            next(error);
        }
    }
};


// GET /routs/:routId/edit
exports.edit = async (req, res, next) => {

    const { rout } = req.load;

    const empresas = await models.Empresa.findAll();

    res.render('routs/edit', { rout, empresas });
};


// PUT /routs/:routId
exports.update = async (req, res, next) => {

    const { body } = req;
    const { rout } = req.load;

    rout.codigo = body.codigo;
    rout.nombre = body.nombre;
    rout.parNorte = body.parNorte;
    rout.posNorte = body.posNorte;
    rout.parSur = body.parSur;
    rout.posSur = body.posSur;
    rout.empresaId = body.empresaId
    try {
        await rout.save({ fields: ["codigo", "nombre", "parNorte", "posNorte", "parSur", "posSur", "empresaId"] });
        req.flash('success', 'Ruta Actualizada Exitosamente.');
        res.redirect('/routs/' + rout.id);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('routs/edit', { rout });
        } else {
            req.flash('error', 'Error Editando nueva Ruta: ' + error.message);
            next(error);
        }
    }
};


// DELETE /routs/:routId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.rout.destroy();
        req.flash('success', 'Ruta Eliminada Exitosamente.');
        res.redirect('/routs');
    } catch (error) {
        next(error);
    }
};

