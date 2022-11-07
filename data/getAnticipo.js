const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getAnticipo = async (cajaId) => {

   if (models.Anticipo.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Anticipo.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};