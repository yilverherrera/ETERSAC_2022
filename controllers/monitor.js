const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");

const moment = require("moment");

const paginate = require("../helpers/paginate").paginate;



// GET /monitors
exports.index = async (req, res, next) => {
  const {fecha} = req.query;
  try {
    let servicios = [];
    const catVlta = await models.Catvuelt.findAll();
  
    Promise.all(catVlta.map(async(cat) => {
        const vlta = await models.Vuelt.findAll({
          where:{
            catvueltId:{
              [Op.eq]: cat.id,
            },
            fecha:{
              [Op.eq]: fecha,
            }
          },
          include:[{
            model: models.Servbus,
            as: "pertSerVue"
          }]
        }).map((vlt)=>{
          return{
            vuelta: cat.valor,
            unidadId: vlt.unidadId,
            efectivo: vlt.pertSerVue.efectivo,
          }
        });
      servicios = [...vlta];

    })).then(() => 
    res.json(servicios)
      );
    
    

    
  } catch (error) {
    next(error);
  }
};
