const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getPagonomina = async (cajaId) => {

   if (models.Pagonomina.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Pagonomina.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};