const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");
const getD2UnidadDia = require("../data/getD2UnidadDia");
const getAntUnidadDia = require("../data/getAntUnidadDia");
const getUltTanqueo = require("../data/getUltTanqueo");
const getUltTanqueoVltas = require("../data/getUltTanqueoVltas");
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
      servicios = [...servicios, ...vlta];
      

    })).then(async() => {
       

    const groups = await models.Grupo.findAll().map(async(group) => {
      const unidads = await group.getUnidads().map(unidad => unidad.id);
      return{
        id: group.id,
        nombre: group.nombre,
        showCaja: group.showCaja,
        unidads: unidads,
      }
    })

    const unidadsPlaca = await models.Unidad.findAll().map(async(unid)=>{
      const padron = unid.codigo+' '+unid.placa;
      const d2 = await getD2UnidadDia(unid.id, fecha);
      const anticipo = await getAntUnidadDia(unid.id, fecha);
      const ultTanqueoAnt = await getUltTanqueo(unid.id, fecha);
      const fechasAnticipos = ultTanqueoAnt !== 0 ? ultTanqueoAnt.fecha : "" ;
      const saldosAnticipos = ultTanqueoAnt !== 0 ? ultTanqueoAnt.saldo : 0 ;
      const ultTanqueoVltas = await getUltTanqueoVltas(unid.id, fecha);
      const fechasVltas = ultTanqueoVltas !== 0 ? ultTanqueoVltas.fecha : "" ;
      const VltasAcum = ultTanqueoVltas !== 0 ? ultTanqueoVltas.vueltas : 0 ;
      return{
        id: unid.id,
        padron: padron,
        d2: d2,
        anticipo: anticipo,
        fechasAnticipos: fechasAnticipos,
        saldosAnticipos: saldosAnticipos,
        fechasVltas: fechasVltas,
        VltasAcum: VltasAcum,

      }
       
    });

    const servbus = await models.Servbus.findAll({
      include:[{
        
      }]
    });
    
    const jsonS = {
      servicios: servicios,
      groups: groups,
      catVlta: catVlta,
      unidadsPlaca: unidadsPlaca,
    }
    
 res.json(jsonS);
    } );
  } catch (error) {
    next(error);
  }
};
