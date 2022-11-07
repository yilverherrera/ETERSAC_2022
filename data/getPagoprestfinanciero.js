const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getPagoprestfinanciero = async (cajaId) => {

   if (models.Pagoprestfinanciero.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Pagoprestfinanciero.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};