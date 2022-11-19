const { and } = require("sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");
const getUltTanqueoDet = require('../data/getUltTanqueoDet');

//----------------SERVICIOS-----------

// Autoload el vent asociado a :ventId
exports.load = async (req, res, next, ventId) => {

  try {
    const vent = await models.Vent.findByPk(ventId);
    if (vent) {
      req.load = { ...req.load, vent };
      next();
    } else {
      throw new Error("No hay venta con id=" + ventId);
    }
  } catch (error) {
    next(error);
  }

};

//----------------------------------INDEX-----------------------------------------
// GET /cajas/:cajaId/vents
exports.index = async (req, res, next) => {

  let findOptions = {
    where: {},
    include: [],
    order: [["productoId", "ASC"]],
  };

  const { caja } = req.load;

  findOptions.where.cajaId = caja.id;

  findOptions.include.push({
    model: models.Unidad,
    as: "pertUniVen",
  });

  findOptions.include.push({
    model: models.Producto,
    as: "pertProVen",
  });

  findOptions.include.push({
    model: models.Vueltpro,
    as: "vueltpros",
    include: [
    {
      model: models.Catvuelt,
      as: "pertCatvVup",
    },
    ],
  });

  try {

    const servbusSum = await models.Servbus.findAll({
      attributes: [[Sequelize.fn('sum', Sequelize.col('efectivo')), 'total']],
      raw: true,
      order: Sequelize.literal('total DESC')
    });

    const cobroBusSum = await models.Cobroservbus.findAll({
      attributes: [[Sequelize.fn('sum', Sequelize.col('monto')), 'total']],
      raw: true,
      order: Sequelize.literal('total DESC')
    });

    const cobroVtaSum = await models.Cobrovent.findAll({
      attributes: [[Sequelize.fn('sum', Sequelize.col('monto')), 'total']],
      raw: true,
      order: Sequelize.literal('total DESC')
    });

    const ventSum = await models.Vent.findAll({
      attributes: [[Sequelize.fn('sum', Sequelize.col('efectivo')), 'total']],
      raw: true,
      order: Sequelize.literal('total DESC')
    });

    const cobroBusSuma = cobroBusSum[0].total !== null ? cobroBusSum[0].total : 0;

    const cobroVtaSuma = cobroVtaSum[0].total !== null ? cobroVtaSum[0].total : 0;

    const cobrosTotal = cobroBusSuma + cobroVtaSuma;

    servbusTotal = servbusSum[0].total !== null ? servbusSum[0].total : 0;

    ventTotal = ventSum[0].total !== null ? ventSum[0].total : 0;

    const total = cobrosTotal  + servbusTotal + ventTotal;

    const despacho = await models.Despacho.findByPk(caja.despachoId);

    if (despacho) {
      res.locals.lcDespacho = despacho.name;
      res.locals.lcFecha = caja.fecha;
    }

    const vntas = await models.Vent.findAll(findOptions);
    const productos = await models.Producto.findAll();
    let vlta = "";

    //-------- Agrupado del Objeto ventas------------
    let vents = vntas.map((vta) => {
      vlta =
      JSON.stringify(vta.vueltpros) !== "[]"
      ? vta.vueltpros[0].pertCatvVup.valor
      : "";
      montoUnitario =
      JSON.stringify(vta.vueltpros) !== "[]"
      ? vta.vueltpros[0].montoUnitario
      : "";
      vltCanceladas =
      JSON.stringify(vta.vueltpros) !== "[]"
      ? vta.vueltpros[0].vltCanceladas
      : "";
      return {
        id: vta.id,
        monto: vta.monto,
        precioVta: vta.precioVta,
        cant: vta.cant,
        efectivo: vta.efectivo,
        anticipo: vta.anticipo,
        cpc: vta.cpc,
        dctoFalla: vta.dctoFalla,
        dctoSinietro: vta.dctoSinietro,
        dctoAutoridad: vta.dctoAutoridad,
        codigo: vta.pertUniVen.codigo,
        placa: vta.pertUniVen.placa,
        productoId: vta.pertProVen.id,
        vuelta: vlta,
        vltCanceladas: vltCanceladas,
        montoUnitario: montoUnitario
      };
    });

    //---------- Ordenado por código del Objeto ventas
    vents = vents.sort(function (a, b) {

      if (parseInt(a.codigo) > parseInt(b.codigo)) {
        return 1;
      }
      if (parseInt(a.codigo) < parseInt(b.codigo)) {
        return -1;
      }
      // a must be equal to b
      return 0;

    });

    res.render("vents/index.ejs", { caja, vents, productos, servbusTotal, ventTotal, cobrosTotal, total });

  } catch (error) {
    next(error);
  }

};
//-------------------------------------SHOW------------------------------------------
// GET /cajas/:cajaId/vents/:ventId
exports.show = async (req, res, next) => {

  const { caja } = req.load;
  const { vent } = req.load;

  let findOptions = {
    where: {},
    include: [],
  };

  let findOptionsVlta = {
    where: {},
    include: [],
  };

  findOptions.where.id = vent.id;

  findOptionsVlta.where.ventId = vent.id;

  findOptions.include.push({
    model: models.Unidad,
    as: "pertUniVen",
  });

  findOptions.include.push({
    model: models.Operador,
    as: "pertOpeVen",
  });

  findOptionsVlta.include.push({
    model: models.Catvuelt,
    as: "pertCatvVup",
  });

  const vents = await models.Vent.findOne(findOptions);

  const vuelt = await models.Vueltpro.findOne(findOptionsVlta);

  res.render("vents/show", { caja, vents, vuelt });

};
//----------------------------NEW--------------------------------------------------
// GET /cajas/:cajaId/vents/new
exports.new = async (req, res, next) => {

  const { caja } = req.load;

  const unidads = await models.Unidad.findAll();

  const productos = await models.Producto.findAll();

  const vent = {
    id: "",
    monto: 0,
    monto2: 0,
    monto3: 0,
    fecha: caja.fecha,
    cant: 1,
    efectivo: "0",
    banco: "",
    cpc: "",
    anticipo: "",
    dctoFalla: "",
    dctoSinietro: "",
    dctoAutoridad: "",
    cajaId: caja.id,
    unidadId: "",
    productoId: "",
    operadorId: "",
  };

  res.render("vents/new.ejs", { vent, productos, unidads });

};
//-------------------------NEW SELECTED--------------------------------------------
// GET /cajas/:cajaId/vents/:unidadId/:productoId/newven
exports.newVen = async (req, res, next) => {

  let findOptions = {
    where: {},
    include: [],
  };

  let findOptionsOpe = {
    where: {},
    include: [],
  };

  let findOptionsAnt = {
    where: {},
    include: [],
  };

  const { caja } = req.load;
  const { unidad } = req.load;
  const { producto } = req.load;
  let monto = producto.precioVta1;
  let servuelta = false;
  
  //------Se incluye en la búsqueda de los operadores sus cpc mayores a cero
  findOptionsOpe.include.push({
    model: models.Vent,
    as: "ventas",
    where: {
      cpc: {
        [Op.gt]: 0,
      },
    },
    required: false,
  });

  //---------Búsqueda de grupo al cual pertenece la Unidad seleccionada por el usuario
  // para establecer el monto a pagar
  const grupUnidad = await unidad.getGrupos().map( (grupo) => {
    return {
      grupoId: grupo.id
    }
  });

 //------ Búsqueda de la Configuración del Producto (Precio, Monto a Pagar...)  seleccionado en el body por el usuario,
 // de acuerdo al grupo al que pertenece ----------------------------------------------------------
 if (JSON.stringify(grupUnidad) !== '[]') {
   const confproducto = await models.Confproducto.findOne({
    where: {
      productoId: {
        [Op.eq]: producto.id,
      },
      grupoId: {
        [Op.eq]: grupUnidad[0].grupoId,
      },      
    },
  });
   if (confproducto) {
     monto = confproducto.monto;
     servuelta = confproducto.vuelta;
   }
 }
 //-----------------------------------------------------------


 const unidads = await models.Unidad.findAll({
  where: {
    id: {
      [Op.eq]: unidad.id,
    },
  },
});
 const productos = await models.Producto.findAll();
 const cobrosAll = await models.Cobrovent.findAll();
 const operadores = await models.Operador.findAll(findOptionsOpe);

 //-----------Anticipos
 const anticipos = await getUltTanqueoDet(unidad.id, caja.fecha);

 console.log(anticipos);
//--------------------------------------------------------------------

const allCatvuelts = await models.Catvuelt.findAll();
const hoy = caja.fecha;

let ope = 0;
let ctapc = 0;
let fechapc = "";
let fechacaja = "";
let suma = 0;
let ventId = 0;
let cobrar = {};

  //map de operadores, se ordena y se filtra el elemento servbus donde exista deuda. La más antigua (servbusId ASC)
  const operadors = operadores.map((operar) => {
    ope = operar.ventas.length;
    ctapc = 0;
    fechapc = 0;
    ventId = 0;

    if (ope > 0) {
      operar.ventas.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      let i = 0;
      do {
        fechacaja = operar.ventas[i].fecha;
        if (fechacaja < hoy) {
          ventId = operar.ventas[i].id;
          ctapc = operar.ventas[i].cpc;
          fechapc = fechacaja;
          suma = 0;
          if (ctapc > 0) {
            cobrar = cobrosAll.filter(
              (cobra) => cobra.ventId === operar.ventas[i].id
              );
            if (cobrar.length > 0) {
              cobrar.forEach((cobro) => {
                suma = suma + cobro.monto;
              });
              ctapc = ctapc - suma;
            }
          }
        }
        i++;
      } while (ctapc === 0 && i < ope);
    }

    return {
      id: operar.id,
      nombre: operar.nombre,
      apellido: operar.apellido,
      ventId: ventId,
      fecha: fechapc,
      cpc: ctapc.toFixed(2),
    };
  });

  findOptions.where.fecha = caja.fecha;
  findOptions.where.unidadId = unidad.id;
  findOptions.include.push({
    model: models.Vent,
    as: "pertVenVue",
    include: [
    {
      model: models.Caja,
      as: "pertCajVen",
      include: [
      {
        model: models.Despacho,
        as: "pertDesCaj",
      },
      ],
    },
    ],
  });

  //-----Búsqueda de las vueltas recorridas por la unidad en esa fecha
  const VueltasIds = await models.Vueltpro.findAll(findOptions);

  let cpc = 0;
  let venId = 0;
  let vencId = 0;
  let vltasRec = 0;
  let montoAcu = 0;
  let acc = 0;

  //----El objeto VueltasIds se Mapea en el caso que sea null igualar las variables a cero o nada
  // que son requeridas en la vista new, igualmente se evalúa las vueltas recorridas-------------
  const venVueltasIds = VueltasIds.map((venVta) => {
    cpc = venVta.pertVenVue.cpc !== null ? venVta.pertVenVue.cpc : "";
    venId = venVta.pertVenVue.id !== null ? venVta.pertVenVue.id : "";
    const catvueltId = venVta.catvueltId !== null ? venVta.catvueltId : 0;
    if (catvueltId > vltasRec) { vltasRec = catvueltId; }
    acc = venVta.pertVenVue.monto !== null ? venVta.pertVenVue.monto : 0;
    montoAcu = montoAcu + acc;


    return {
      id: venVta.id !== null ? venVta.id : "",
      catvueltId: catvueltId,
      ventId: venId,
      efectivo: venVta.pertVenVue.efectivo !== null ? venVta.pertVenVue.efectivo : "",
      cpc: cpc,
      dctoFalla: venVta.pertVenVue.dctoFalla !== null ? venVta.pertVenVue.dctoFalla : "",
      dctoSinietro: venVta.pertVenVue.dctoSinietro !== null ? venVta.pertVenVue.dctoSinietro : "",
      dctoAutoridad: venVta.pertVenVue.dctoAutoridad !== null ? venVta.pertVenVue.dctoAutoridad : "",
      color: venVta.pertVenVue.pertCajVen.pertDesCaj.color !== null ? venVta.pertVenVue.pertCajVen.pertDesCaj.color : "",
      ventcId: vencId,
    };
  });

  //----- En la sentecia anterior se evaluó las vueltas recorridas por la unidad seleccionada por el 
  // usuario, obteniedo el id de esta vuelta, acá se busca su valor en Categorias de Vueltas 
  const indexCatVlta = allCatvuelts.findIndex(  (vta, index) =>  vta.id === vltasRec );

  //---- En el caso que el usuario en la seleccione monto a pagar diferentes en cada vuelta, se
  //--- lleva la diferencia a restar al monto a pagar de acuerdo a su selección actual
  const montoRecda = montoAcu;
  const vtaRecda = indexCatVlta !== -1 ? allCatvuelts[indexCatVlta].valor : 0;
  const resMonto = montoRecda - (vtaRecda * monto);
  const resMonto2 = montoRecda - (vtaRecda * producto.precioVta2);

  const vent = {
    id: "",
    monto: monto,
    monto2: monto,
    monto3: producto.precioVta2,
    fecha: caja.fecha,
    cant: 1,
    efectivo: "0",
    banco: "",
    cpc: "",
    anticipo: "",
    dctoFalla: "",
    dctoSinietro: "",
    dctoAutoridad: "",
    cajaId: caja.id,
    unidadId: unidad.id,
    productoId: producto.id,
    operadorId: "",
    servuelta: servuelta
  };

  res.render("vents/new.ejs", {
    vent,
    productos,
    unidads,
    operadors,
    allCatvuelts,
    venVueltasIds,
    anticipos
  });
};

//-------------------------------------------CREATE--------------------------------------------
// POST /cajas/:cajaId/vents/create
exports.create = async (req, res, next) => {
  const unidads = await models.Unidad.findAll();
  const productos = await models.Producto.findAll();
  const { caja } = req.load;
  const cajaId = caja.id;
  const fechaCaja = caja.fecha;

  let vtaId = 0;
  let {
    monto,
    fecha,
    cant,
    efectivo,
    banco,
    cpc,
    anticipo = 0,
    dctoFalla = 0,
    dctoSinietro = 0,
    dctoAutoridad = 0,
    unidadId,
    productoId,
    operadorId = 1,
    catvueltId = 0,
    cpcOper = "",
    cobrotxt = "",
    cpcIds = [],
    chMonto = 0,
    servuelta = false
  } = req.body;
  
  const arranticipo = anticipo;

  if (anticipo.length > 0){
    let sumAnt = 0;
    anticipo.forEach ( (antId) => {
      const id = antId.split('T')[0];
      const monto = antId.split('T')[1];
      sumAnt = sumAnt + parseFloat(monto);
      
    });

    anticipo = sumAnt;

  }

  const precioVta = chMonto;

  let vltCanceladas = catvueltId;
  const montoUnitario = chMonto;
  let vtaopeId = 0;

  if (servuelta === 'true') {

    vtaopeId = operadorId.split("T")[1];
    operadorId = operadorId.split("T")[0];

    const catVlta = await models.Catvuelt.findByPk(vltCanceladas);

    if (catVlta) {
      vltCanceladas = catVlta.valor;
    }

    if (cpcOper === "on" && cobrotxt !== "") {
      efectivo = efectivo - cobrotxt;
      monto = monto - cobrotxt;
    }
  }
  
  let vent = models.Vent.build({
    precioVta,
    fecha,
    fechaCaja,
    cant,
    monto,
    efectivo,
    banco,
    cpc,
    anticipo,
    dctoFalla,
    dctoSinietro,
    dctoAutoridad,
    unidadId,
    productoId,
    cajaId,
    operadorId,
  });

  try {
    // Saves only the fields question and answer into the DDBB
    vent = await vent.save({
      fields: [
      "precioVta",
      "fecha",
      "fechaCaja",
      "cant",
      "monto",
      "efectivo",
      "banco",
      "cpc",
      "anticipo",
      "dctoFalla",
      "dctoSinietro",
      "dctoAutoridad",
      "unidadId",
      "productoId",
      "cajaId",
      "operadorId",
      ],
    });

    if (servuelta === 'true') {

      const ventId = vent.id;

      if (arranticipo.length > 0){
        const searAnticipo = arranticipo.map( (antId) => {
          const id = antId.split('T')[0];
          const monto = antId.split('T')[1];
          return {
            monto: monto,
            fecha: fecha,
            anticipoId: id,
            ventId: ventId
          }
        });
        
        await models.Aplianticipo.bulkCreate(searAnticipo);
      }

      let vueltpro = models.Vueltpro.build({
        fecha,
        vltCanceladas,
        montoUnitario,
        ventId,
        unidadId,
        catvueltId,
      });

      vueltpro = await vueltpro.save({
        fields: ["fecha", "vltCanceladas", "montoUnitario", "ventId", "unidadId", "catvueltId"],
      });

     /* if (cpcIds.length > 0) {
        const ventcId = ventId;
        cpcIds.forEach(async (ventId) => {
          const ventsId = await models.Vent.findByPk(ventId);
          let monto = ventsId.cpc;
          ventId = ventsId.id;
          let tmpcobrovta = models.Tmpcobrovta.build({
            monto,
            fecha,
            ventId,
            ventcId,
          });
          tmpcobrovta = await tmpcobrobus.save({
            fields: ["monto", "fecha", "ventId", "ventcId"],
          });

          ventsId.cpc = 0;
          ventsId.monto = ventsId.monto - monto;
          await ventsId.save({ fields: ["monto", "cpc"] });
        });
      }
      */
      if (cpcOper === "on" && cobrotxt !== "") {
        const monto = cobrotxt;
        const ventId = vtaopeId;

        let cobrovent = models.Cobrovent.build({
          monto,
          fecha,
          ventId,
          cajaId,
        });
        cobrovent = await cobrovent.save({
          fields: ["monto", "fecha", "ventId", "cajaId"],
        });
      }
    }

    req.flash("success", "Venta Creada Exitosamente.");
    res.redirect("/cajas/" + caja.id + "/vents");
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      req.flash("error", "Hay errores en el formulario");
      error.errors.forEach(({ message }) => req.flash("error", message));
      res.render("vents/new.ejs", { vent, productos, unidads });
    } else {
      req.flash("error", "Error creando el nuevo Producto: " + error.message);
      next(error);
    }
  }
};


// DELETE /cajas/:cajaId/vents/:ventId
exports.destroy = async (req, res, next) => {
  const { caja } = req.load;
  const productoId = req.load.vent.productoId;
  const id = req.load.vent.id;
  
  try {

    if (productoId === 1) {
      const vuelt = await models.Vueltpro.findOne({
        where: {
          ventId: {
            [Op.eq]: id,
          },
        },
      });

      if (JSON.stringify(vuelt) !== "null") {

        await vuelt.destroy();
      }
      
      
      const anticipo = await models.Aplianticipo.findOne({
        where: {
          ventId: {
            [Op.eq]: id,
          },
        },
      });

      if (JSON.stringify(anticipo) !== "null") {

        await anticipo.destroy();
      }

    }

    await req.load.vent.destroy();
    req.flash("success", "Producto borrado Exitosamente.");
    res.redirect("/cajas/" + caja.id + "/vents");
  } catch (error) {
    req.flash("error", "Error borrando el Producto: " + error.message);
    next(error);
  }
};
