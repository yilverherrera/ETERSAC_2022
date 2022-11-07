const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getRetiro = async (cajaId) => {

   if (models.Retiro.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Retiro.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};