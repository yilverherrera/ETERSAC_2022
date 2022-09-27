const Sequelize = require("sequelize");
const {models} = require("../models");
 

// Autoload el despacho asociado a :despachoId
exports.load = async (req, res, next, despachoId) => {

    try {
        const despacho = await models.Despacho.findByPk(despachoId);
        if (despacho) {
            req.load = {...req.load, despacho};
            next();
        } else {
            throw new Error('There is no despacho with id=' + despachoId);
        }
    } catch (error) {
        next(error);
    }
};

// GET /despachos
exports.index = async (req, res, next) => {

    try {

        const despachos = await models.Despacho.findAll();
     
        res.render('despachos/index.ejs', {despachos});
    } catch (error) {
        next(error);
    }
};

// GET /despachos/new
exports.new = async (req, res, next) => {

    const routs = await models.Rout.findAll();
    const despacho = {name: "", color: "#ff0000"};

    res.render('despachos/new', {despacho, routs});
};

// POST /despachos/create
exports.create = async (req, res, next) => {

    const {name, color, routId} = req.body;
    
    let despacho = models.Despacho.build({ name, color, routId });

    try {
        // Saves only the fields name into the DDBB
        despacho = await despacho.save();
        req.flash('success', 'Despacho created successfully.');
        res.redirect('/despachos');
        
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'There are errors in the form:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('despachos/new', {despacho});
        } else {
            req.flash('error', 'Error creating a new Despacho: ' + error.message);
            next(error)
        }
    }        
    
};

// GET /despachos/:despachoId/edit
exports.edit = async (req, res, next) => {

    const {despacho} = req.load;

    const allUsers = await models.User.findAll();

    const despachoUsersIds = await despacho.getUsers().map(user => user.id);

    res.render('despachos/edit', {despacho, allUsers, despachoUsersIds});
};

// PUT /despachos/:despachoId
exports.update = async (req, res, next) => {

    const {despacho} = req.load;

    const {name, color, usersIds = []} = req.body;
    
    despacho.name = name.trim();
    
    try {
        await despacho.save({fields: ["name", "color"]});
        await despacho.setUsers(usersIds);
        
        res.redirect('/despachos');
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'There are errors in the form:');
            error.errors.forEach(({message}) => req.flash('error', message));
            const allUsers = await models.User.findAll();
            res.render('despachos/edit', {despacho, allUsers, despachoUsersIds: usersIds});
        } else {
            req.flash('error', 'Error editing the despacho: ' + error.message);
            next(error);
        }
    
    }
};

// DELETE /despachos/:despachoId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.despacho.destroy();
        req.flash('success', 'Despacho deleted successfully.');
        res.redirect('/goback');
    }  catch(error) {
        req.flash('error', 'Error deleting the Despacho: ' + error.message);
        next(error);
    }
};
