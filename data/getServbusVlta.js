const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


module.exports =  getServbusVlta = async (fecha) => {
  let findOptions = {
    where: {},
    include: [],
  };

  findOptions.where.fecha = fecha;

  findOptions.include.push({
    model: models.Service,
    as: "pertSerSer",
    where:{
      vuelta:{
        [Op.eq]: false,
      },
    },
    required: true,
  });

  const servbus = await models.Servbus.findAll(findOptions);
   console.log(JSON.stringify(servbus));

   if (JSON.stringify(servbus) !== '[]'){

    return servbus;

  } else {

    return 0;
  }


}