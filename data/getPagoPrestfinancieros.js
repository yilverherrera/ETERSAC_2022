const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /pagoproveedors
module.exports = getPagoPrestfinancieros = async (cajaId) => {

    
    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Prestfinanciero,
            as: "pertPrePaf",
            include:[{
                model: models.Financiera,
                as: "pertFinPre",
            }]
        });


        findOptions.where.cajaId = cajaId;

        const pagoprestfinanciero = await models.Pagoprestfinanciero.findAll(findOptions);

        return pagoprestfinanciero;
    } catch (error) {
        next(error);
    }

};