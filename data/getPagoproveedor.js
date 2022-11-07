const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getPagoproveedor = async (cajaId) => {

   if (models.Pagoproveedor.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Pagoproveedor.sum('efectivo', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};