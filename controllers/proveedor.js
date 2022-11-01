const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el proveedor asociado a :proveedorId
exports.load = async (req, res, next, proveedorId) => {

    try {
        const proveedor = await models.Proveedor.findByPk(proveedorId);
        if (proveedor) {
            req.load = {...req.load, proveedor};
            next();
        } else {
            throw new Error('There is no proveedor with id=' + proveedorId);
        }
    } catch (error) {
        next(error);
    }
};
