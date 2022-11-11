const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getD2UnidadDia = async (unidadId, fecha) => {

   if (models.Vent.sum('monto', {
      where: {
         unidadId:{
            [Op.eq]:unidadId
         },
         productoId:{
            [Op.eq]: 1
         },
         fecha:{
            [Op.eq]: fecha
         }
      }
   }
   )){
    return models.Vent.sum('monto', { 
      where: {
         unidadId:{
            [Op.eq]:unidadId
         },
         productoId:{
            [Op.eq]: 1
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