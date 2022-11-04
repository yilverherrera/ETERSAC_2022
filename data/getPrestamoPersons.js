const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /prestamospersons
module.exports = getPrestamoPersons = async (empleadoId) => {

    
   

        const prestamoperson = await models.Prestamopersona.findAll({
            where: {
                empleadoId:{
                    [Op.eq]: empleadoId,
                },
            },
                group: ['Prestamopersona.id'],
                attributes: [[Sequelize.fn('', Sequelize.col('Prestamopersona.id')), 'id'],[Sequelize.fn('', Sequelize.col('Prestamopersona.monto')),'monto'],[Sequelize.fn('', Sequelize.col('Prestamopersona.cuotaNominaQuincena')),'cuota'],[Sequelize.fn('sum', Sequelize.col('pagoprespersonas.monto')),'total'],[Sequelize.fn('count', Sequelize.col('pagoprespersonas.id')),'contado']],
                include: [{model: models.Pagoprespersona, as: 'pagoprespersonas', attributes:[]}],
                raw: true,
                order: Sequelize.literal('id DESC'),
        }).filter( (prest) => prest.monto > prest.total);

        return prestamoperson;
    
};