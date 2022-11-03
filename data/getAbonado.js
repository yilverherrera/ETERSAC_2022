const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /pagoproveedors
module.exports = getAbonado = async (busgastoId) => {
    let totalAbonado = 0;

        const abonado = await models.Pagoproveedor.findAll({
            where:{
                busgastoId:{
                    [Op.eq]:busgastoId,
                }
            },
            group: ['Pagoproveedor.id'],
            attributes:[[Sequelize.fn('SUM', Sequelize.col('Pagoproveedor.efectivo')), 'efectivo'],[Sequelize.fn('SUM', Sequelize.col('Pagoproveedor.banco')), 'banco'],[Sequelize.fn('SUM', Sequelize.col('Pagoproveedor.fueradCaja')), 'fueradCaja']],
            raw: true,
            order: Sequelize.literal('id DESC'),
        });

        abonado.forEach( (abo) =>  totalAbonado += abo.efectivo + abo.banco + abo.fueradCaja );

        return totalAbonado;
  

};