const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getAntUnidadDia = async (unidadId, fecha) => {

   if (models.Anticipo.sum('monto', {
      where: {
         unidadId:{
            [Op.eq]:unidadId
         },
         fecha:{
            [Op.eq]: fecha
         }
      }
   }
   )){
    return models.Anticipo.sum('monto', { 
      where: {
         unidadId:{
            [Op.eq]:unidadId
         },
         fecha:{
            [Op.eq]: fecha
         }
      }
   });
   } else {
    return 0;
   }
    
};