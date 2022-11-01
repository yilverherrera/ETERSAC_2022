const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /pagoproveedors
module.exports = getPagoProveedors = async (cajaId) => {

    
    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Proveedor,
            as: "pertProPag"
        });

        findOptions.include.push({
            model: models.Busgasto,
            as: "pertBusPag",
            include:[{
                model: models.Detbusgasto,
                as: "detbusgastos",
                include:[{
                    model: models.Reproducto,
                    as: "pertProDbg"
                }]
            }]
        })

        findOptions.where.cajaId = cajaId;

        const pagoproveedors = await models.Pagoproveedor.findAll(findOptions);

        return pagoproveedors;
    } catch (error) {
        next(error);
    }

};