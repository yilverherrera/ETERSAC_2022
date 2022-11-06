const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /pagoproveedors
module.exports = getAbonadoPrest = async (prestfinancieroId) => {
    let totalAbonado = 0;

        const abonado = await models.Pagoprestfinanciero.findAll({
            where:{
                prestfinancieroId:{
                    [Op.eq]:prestfinancieroId,
                }
            },
            group: ['Pagoprestfinanciero.id'],
            attributes:[[Sequelize.fn('SUM', Sequelize.col('Pagoprestfinanciero.efectivo')), 'efectivo'],[Sequelize.fn('SUM', Sequelize.col('Pagoprestfinanciero.banco')), 'banco'],[Sequelize.fn('SUM', Sequelize.col('Pagoprestfinanciero.fueradCaja')), 'fueradCaja']],
            raw: true,
            order: Sequelize.literal('id DESC'),
        });

        abonado.forEach( (abo) =>  totalAbonado += abo.efectivo + abo.banco + abo.fueradCaja );

        return totalAbonado;
  

};