const { and } = require("sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");



// Autoload el service asociado a :serviceId
exports.load = async (req, res, next, serviceId) => {

    try {
        const service = await models.Service.findByPk(serviceId);
        if (service) {
            req.load = { ...req.load, service };
            next();
        } else {
            throw new Error('No hay service con id=' + serviceId);
        }
    } catch (error) {
        next(error);
    }
};