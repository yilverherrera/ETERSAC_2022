const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getAdmgasto = async (cajaId) => {

   if (models.Admgasto.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Admgasto.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};