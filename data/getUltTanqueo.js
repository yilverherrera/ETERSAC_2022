const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getUltTanqueo = async (unidadId, fecha) => {



   const max = await models.Vent.findAll({
      where: {
        unidadId:{
         [Op.eq]: unidadId
      },
      productoId:{
         [Op.eq]: 1
      }
   },
   group:['Vent.id'],
   attributes: [[Sequelize.fn('max', Sequelize.col('Vent.id')), 'maximo']],
   raw:true,
   order: Sequelize.literal('id DESC'),

});

   if (JSON.stringify(max) !== '[]'){
      const fechaMax = await models.Vent.findByPk(max[0].maximo);

      const anticipos = await models.Anticipo.findAll({
         where: {
           unidadId:{
            [Op.eq]: unidadId
         },
         fecha:{
            [Op.gte]: fechaMax.fecha,
            [Op.lte]: fecha,
         }
      },
      group:['Anticipo.id'], 
      attributes: [[Sequelize.fn('', Sequelize.col('Anticipo.id')), 'id'],[Sequelize.fn('', Sequelize.col('Anticipo.monto')), 'monto'],[Sequelize.fn('', Sequelize.col('Anticipo.fecha')), 'fecha'],[Sequelize.fn('sum', Sequelize.col('aplianticipos.monto')), 'aplicado'],[Sequelize.fn('', Sequelize.col('pertCajAnt.pertDesCaj.name')), 'despacho']],
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
   let saldoTotal = 0;
   let fechasAnticipo = '';
      anticipos.forEach((antic) => {
    const saldo = antic.monto - antic.aplicado;
   saldoTotal += saldo; 
   fechasAnticipo += `Fecha:${antic.fecha} Anticipo:${saldo} Despacho:${antic.despacho}T`;
   });
      return anticipoAcum = {
         saldo: saldoTotal,
         fecha: fechasAnticipo,
      }
   } else {
     return 0; 
   }


   } else {
     return 0;
  }

};