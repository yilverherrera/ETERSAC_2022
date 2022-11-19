const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getAnticiposUnidad = async (unidadId) => {
  
  const anticipos = await models.Anticipo.findAll({
         where: {
          unidadId:{
            [Op.eq]: unidadId
         },
      },
      group:['Anticipo.id'], 
      attributes: [[Sequelize.fn('', Sequelize.col('Anticipo.id')), 'id'],[Sequelize.fn('', Sequelize.col('Anticipo.monto')), 'monto'],[Sequelize.fn('', Sequelize.col('Anticipo.fecha')), 'fecha'],[Sequelize.fn('', Sequelize.col('Anticipo.fechaCaja')), 'fechaCaja'],[Sequelize.fn('sum', Sequelize.col('aplianticipos.monto')), 'aplicado'],[Sequelize.fn('', Sequelize.col('pertCajAnt.pertDesCaj.name')), 'despacho']],
      include: [{
         model: models.Aplianticipo,
         as: "aplianticipos",
         attributes:[]
      },
      {
         model: models.Caja,
         as: "pertCajAnt",
         attributes:[],
         include:[{
            model: models.Despacho,
            as: "pertDesCaj",
            attributes: [],
         }]
      }],
      raw:true,
      order: Sequelize.literal('id DESC')

   });
     if (JSON.stringify(anticipos) !== '[]'){
        return await anticipos.map((anticip) => {
         const saldo = anticip.monto - anticip.aplicado;
         return {
            id: anticip.id,
            monto: anticip.monto,
            fechaCaja: anticip.fechaCaja,
            fecha: anticip.fecha,
            saldo: saldo,
            despacho: anticip.despacho,      
         };
      });
     } else {  

    return [];
 }
};