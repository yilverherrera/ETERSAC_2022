const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getSumPagoProvDoll = async (busgastoId) => {

   if (models.Pagoproveedor.sum('dollar', {where: {busgastoId:{[Op.eq]:busgastoId}}})){
    return models.Pagoproveedor.sum('dollar', {where: {busgastoId:{[Op.eq]:busgastoId}}});
   } else {
    return 0;
   }
    
};