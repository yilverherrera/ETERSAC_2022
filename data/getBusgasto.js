const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getBusgasto = async (cajaId) => {

   if (models.Busgasto.sum('abonado', {where: {cajaId:{[Op.eq]:cajaId}}})){
    return models.Busgasto.sum('abonado', {where: {cajaId:{[Op.eq]:cajaId}}});
   } else {
    return 0;
   }
    
};