const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getCobrovent = async (cajaId) => {

   if (models.Cobrovent.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Cobrovent.sum('monto', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};