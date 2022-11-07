const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getCobroservbus = async (cajaId) => {

   if (models.Cobroservbus.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Cobroservbus.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};