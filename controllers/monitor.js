const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");
const getD2UnidadDia = require("../data/getD2UnidadDia");
const getAntUnidadDia = require("../data/getAntUnidadDia");
const getUltTanqueo = require("../data/getUltTanqueo");
const getUltTanqueoVltas = require("../data/getUltTanqueoVltas");





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
          as: "pertSerVue",
          include:[{
            model: models.Caja,
            as: "pertCajSer",
            include:[{
              model: models.Despacho,
              as: "pertDesCaj",
            },
            {
              model: models.User,
              as: "author",
            }]
          },
          {
            model: models.Operador,
            as: "pertOpeSer",
          }]
        }]
      }).map((vlt)=>{
        return{
          vuelta: cat.valor,
          unidadId: vlt.unidadId,
          efectivo: vlt.pertSerVue.efectivo,
          banco: vlt.pertSerVue.banco,
          cpc: vlt.pertSerVue.cpc,
          falla: vlt.pertSerVue.dctoFalla,
          siniestro: vlt.pertSerVue.dctoSinietro,
          autoridad: vlt.pertSerVue.dctoAutoridad,
          color: vlt.pertSerVue.pertCajSer.pertDesCaj.color,
          autor: vlt.pertSerVue.pertCajSer.author.username,
          nombre: vlt.pertSerVue.pertOpeSer.nombre,
          apellido: vlt.pertSerVue.pertOpeSer.apellido,
        }
      });
      console.log(JSON.stringify(vlta));
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
      });

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

//Cajas--------------------------------------------------------------------
      const cajas = await models.Caja.findAll({
        where:{
          fecha:{
            [Op.eq]: fecha,
          }
        },
        include:[{
          model: models.User,
          as: "author",
        }]
      });
//------------------------------------------------------------------------

//Servicios No Vueltas----------------------------------------------------
      const servbus = await models.Servbus.findAll({
        where:{
          fechaCaja:{
            [Op.eq]: fecha
          }
        },
        include:[
        {
          model: models.Unidad,
          as: "pertUniSer",
        },
        {
          model: models.Service,
          as: "pertSerSer",
          where:{
            vuelta:{
              [Op.eq]: false,
            },
          },
          required: true,
        }]
      });

      const serviciosNoVltas = await models.Service.findAll({
        where:{
          vuelta:{
            [Op.eq]: false,
          }
        }
      });


//-----------------------------------------------------------

//Ventas No Vueltas----------------------------------------------------
      const vents = await models.Vent.findAll({
        where:{
          fechaCaja:{
            [Op.eq]: fecha
          }
        },
        include:[
        {
          model: models.Unidad,
          as: "pertUniVen",
        },
        {
          model: models.Producto,
          as: "pertProVen",
          where:{
            vuelta:{
              [Op.eq]: false,
            },
          },
          required: true,
        }]
      });

      const productosNoVltas = await models.Producto.findAll({
        where:{
          vuelta:{
            [Op.eq]: false,
          }
        }
      });


//-----------------------------------------------------------

//Cobros Servicios No Vueltas----------------------------------------------------
      const cobrosServbus = await models.Cobroservbus.findAll({
        where:{
          fecha:{
            [Op.eq]: fecha
          }
        },
        include:[
        {
          model: models.Servbus,
          as: "pertServCob",
          include:[{
            model: models.Service,
            as: "pertSerSer"
          },
          {
            model: models.Unidad,
            as: "pertUniSer"
          },{
            model: models.Operador,
            as: "pertOpeSer"
          }],
        },

        ]
      });


//-----------------------------------------------------------

//Cobros Ventas No Vueltas----------------------------------------------------
      const cobrosVents = await models.Cobrovent.findAll({
        where:{
          fecha:{
            [Op.eq]: fecha
          }
        },
        include:[
        {
          model: models.Vent,
          as: "pertVenCob",
          include:[{
            model: models.Producto,
            as: "pertProVen"
          },
          {
            model: models.Unidad,
            as: "pertUniVen"
          },{
            model: models.Operador,
            as: "pertOpeVen"
          }],
        },

        ]
      });


//-----------------------------------------------------------

//Cobros Busgastos No Vueltas----------------------------------------------------
      const busgastos = await models.Busgasto.findAll({
        where:{
          fecha:{
            [Op.eq]: fecha
          }
        },
        include:[
        {  
          model: models.Caja,
          as: "pertCajBug",
          include:[
          {
            model: models.User,
            as: "author",
          }]
        },
        {
          model: models.Proveedor,
          as: "pertProBug"
        },
        {
          model: models.Detbusgasto,
          as: "detbusgastos",
          include:[{
            model: models.Reproducto,
            as: "pertProDbg"
          },
          {
            model: models.Unidad,
            as: "pertUniDbg"
          }
          ],
        },

        ]
      });


//-----------------------------------------------------------

//Cobros Busgastos No Vueltas----------------------------------------------------
      const admgastos = await models.Admgasto.findAll({
        where:{
          fecha:{
            [Op.eq]: fecha
          }
        },
        include:[
        {
          model: models.Categadm,
          as: "pertCatAdm"
        },
        ]
      });


//-----------------------------------------------------------

//Pagos Provedores No Vueltas----------------------------------------------------
      const pagosProveedors = await models.Pagoproveedor.findAll({
        where:{
          fecha:{
            [Op.eq]: fecha
          }
        },
        include:[
        {
          model: models.Busgasto,
          as: "pertBusPag",
          include:[{
            model: models.Detbusgasto,
            as: "detbusgastos",
            include:[
            {
              model: models.Unidad,
              as: "pertUniDbg"
            },
            {
              model: models.Reproducto,
              as: "pertProDbg"
            }]
          },
          ],
        },
        ]
      });


//-----------------------------------------------------------


      console.log(JSON.stringify(servbus));    

      const jsonS = {
        servicios: servicios,
        groups: groups,
        catVlta: catVlta,
        unidadsPlaca: unidadsPlaca,
        servbus: servbus,
        serviciosNoVltas: serviciosNoVltas,
        vents: vents,
        productosNoVltas: productosNoVltas,
        cobrosServbus: cobrosServbus,
        cobrosVents: cobrosVents,
        busgastos: busgastos,
        admgastos: admgastos,
        pagosProveedors: pagosProveedors,
        cajas: cajas,
      }

      res.json(jsonS);
    } );
} catch (error) {
  next(error);
}
};
