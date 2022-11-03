const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /prestamospersons
module.exports = getPrestamoPersons = async (empleadoId) => {

    
    try {
    

        const prestamoperson = await models.Prestamoperson.findAll({
            where: {
                empleadoId:{
                    [Op.eq]: empleadoId,
                },
                group: ['Prestamoperson.id'],
                attributes: [[Sequelize.fn('', Sequelize.col('Prestamoperson.id')),'id'],[Sequelize.fn('', Sequelize.col('Prestamoperson.monto')),'monto'],[Sequelize.fn('', Sequelize.col('Prestamoperson.cuotaNominaQuincena')),'cuota'],[Sequelize.fn('sum', Sequelize.col('pagoprespersons.monto')),'total'],[Sequelize.fn('count', Sequelize.col('pagoprespersons.id')),'contado']],
                order: Sequelize.literal('id DESC'),
            }
        }).filter( (prest) => prest.monto > prest.total);

        return prestamoperson;
    } catch (error) {
        next(error);
    }

};