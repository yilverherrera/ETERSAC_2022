const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el prestfinanciero asociado a :prestfinancieroId
exports.load = async (req, res, next, prestfinancieroId) => {

    try {
        const prestfinanciero = await models.Prestfinanciero.findByPk(prestfinancieroId);
        if (prestfinanciero) {
            req.load = {...req.load, prestfinanciero};
            next();
        } else {
            throw new Error('There is no prestfinanciero with id=' + prestfinancieroId);
        }
    } catch (error) {
        next(error);
    }
};
