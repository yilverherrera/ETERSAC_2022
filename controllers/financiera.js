const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el financiera asociado a :financieraId
exports.load = async (req, res, next, financieraId) => {

    try {
        const financiera = await models.Financiera.findByPk(financieraId);
        if (financiera) {
            req.load = {...req.load, financiera};
            next();
        } else {
            throw new Error('There is no financiera with id=' + financieraId);
        }
    } catch (error) {
        next(error);
    }
};
