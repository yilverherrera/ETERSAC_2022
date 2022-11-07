const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getVent = async (cajaId) => {

   if (models.Vent.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Vent.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};