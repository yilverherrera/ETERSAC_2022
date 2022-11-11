const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getUltTanqueoVltas = async (unidadId, fecha) => {



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

      const VltasTanqueo = await models.Vueltpro.findOne({
         where:{
            ventId:{
               [Op.eq]: fechaMax.id,
            }
         },
         include:[{
            model: models.Catvuelt,
            as: "pertCatvVup"
         }]
      });

      let vltasTanq = VltasTanqueo.pertCatvVup.valor;
      const fechaTanq = VltasTanqueo.fecha;

      const vueltas = await models.Vuelt.findAll({
         where: {
          unidadId:{
            [Op.eq]: unidadId
         },
         fecha:{
            [Op.gte]: fechaMax.fecha,
            [Op.lte]: fecha,
         }
      },
      group:['Vuelt.id'], 
      attributes: [[Sequelize.fn('', Sequelize.col('Vuelt.id')), 'id'],[Sequelize.fn('', Sequelize.col('Vuelt.fecha')), 'fecha'],[Sequelize.fn('', Sequelize.col('pertCatvVue.valor')), 'valor']],
      include: [{
         model: models.Catvuelt,
         as: "pertCatvVue",
         attributes:[]
      }],
      raw:true,
      order: Sequelize.literal('id DESC')

   });

      if (JSON.stringify(vueltas) !== '[]'){
         let vltasTotal = 0;
         let fechasVltas = '';
         vueltas.forEach((vlta) => {
            if (fechaTanq === vlta.fecha && vltasTanq > 0){
               vltasTanq = vltasTanq - vlta.valor;
               if (vltasTanq < 0){
               const vltaRest = vltasTanq * (-1);
               vltasTotal += vltaRest; 
               fechasVltas += `Fecha:${vlta.fecha} Vueltas:${vltaRest}T`;   
               }
            }  else {    
               vltasTotal += vlta.valor; 
               fechasVltas += `Fecha:${vlta.fecha} Vueltas:${vlta.valor}T`;
            }
         });

         return vltasAcum = {
            vueltas: vltasTotal,
            fecha: fechasVltas,
         }
      } else {
       return 0; 
    }


 } else {
    return 0;
 }

};