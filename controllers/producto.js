const { and } = require("sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");



// Autoload el producto asociado a :productoId
exports.load = async (req, res, next, productoId) => {

    try {
        const producto = await models.Producto.findByPk(productoId);
        if (producto) {
            req.load = { ...req.load, producto };
            next();
        } else {
            throw new Error('No hay producto con id=' + productoId);
        }
    } catch (error) {
        next(error);
    }
};