const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getServbus = async (cajaId) => {

   if (models.Servbus.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Servbus.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};