const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports = getSumPagoNomina = async (nominaId) => {

   if (models.Pagonomina.sum('monto', {where: {nominaId:{[Op.eq]:nominaId}}})){
    return models.Pagonomina.sum('monto', {where: {nominaId:{[Op.eq]:nominaId}}});
   } else {
    return 0;
   }
    
};