const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /pagoproveedors
module.exports = getPagoNominas = async (cajaId) => {

    
    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Nomina,
            as: "pertNomPan",
            include:[{
                model: models.Empleado,
                as: "pertEmpNom",
            },
            {
                model: models.Quincena,
                as: "pertQuiNom",
            }
            ]
        })

        findOptions.where.cajaId = cajaId;

        const pagonominas = await models.Pagonomina.findAll(findOptions);

        return pagonominas;
    } catch (error) {
        next(error);
    }

};