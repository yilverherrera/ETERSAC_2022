const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getAbonadoPrestDollar = async (prestfinancieroId) => {

   if (models.Pagoprestfinanciero.sum('dollar', {where: {prestfinancieroId:{[Op.eq]:prestfinancieroId}}})){
    return models.Pagoprestfinanciero.sum('dollar', {where: {prestfinancieroId:{[Op.eq]:prestfinancieroId}}});
   } else {
    return 0;
   }
    
};