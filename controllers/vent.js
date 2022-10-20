const { and } = require("sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");

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
      res.locals.lcFecha = caja.fecha.toISOString().split("T")[0];
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
    cant: 0,
    efectivo: "0",
    banco: "",
    cpc: "",
    anticipo: "",
    dctoFalla: "",
    dctoSinietro: "",
    dctoAutoridad: "",
    cajaId: caja.id,
    unidadId: 0,
    productoId: 0,
    operadorId: 0,
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
 const anticipos = await models.Anticipo.findAll({
  where: {
    saldo: {
      [Op.gt]: 0
    },
    unidadId: {
    [Op.eq]: unidad.id
    }
  },
  include:[{
    model: models.Caja,
    as: "pertCajAnt",
    include:[{
      model: models.Despacho,
      as: "pertDesCaj"
    }]
  }]
 });
 const allCatvuelts = await models.Catvuelt.findAll();
 const hoy = caja.fecha.toISOString().split("T")[0];

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
      cpc: ctapc,
    };
  });

  findOptions.where.fecha = caja.fecha.toISOString().split("T")[0];
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
    operadorId: 0,
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

  if (anticipo.length>0){
    let sumAnticipo = 0;
    anticipo.forEach(async (ant) => { 
    const searAnticipo = await models.Anticipo.findByPk(ant);
     sumAnticipo = sumAnticipo + parseFloat(searAnticipo.saldo) 
   });
    anticipo = sumAnticipo;
  }

  const precioVta = chMonto;

  let vltCanceladas = catvueltId;
  const montoUnitario = chMonto;

  if (servuelta === 'true') {

    vtaId = operadorId.split("T")[1];
    operadorId = operadorId.split("T")[0];

    const catVlta = await models.Catvuelt.findByPk(vltCanceladas);

    console.log(JSON.stringify(catVlta));

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

      if (cpcIds.length > 0) {
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

      if (cpcOper === "on" && cobrotxt !== "") {
        const monto = cobrotxt;
        const ventId = vtaId;
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

 //-------------------------------------EDIT----------------------------------------------
// GET /cajas/:cajaId/servbuses/:servbusId/edit
exports.edit = async (req, res, next) => {

  const { caja } = req.load;
  let { servbus } = req.load;
  
  const hoy = caja.fecha.toISOString().split("T")[0];
  let monto = 0;
  let servuelta = false;

  let findOptions = {
    where: {},
    include: [],
  };

  let findOptionsOpe = {
    where: {},
    include: [],
  };

  const allCatvuelts = await models.Catvuelt.findAll();

  //---Busqueda de cobros realizados a la cpc de el registro a editar
  const cobrosAll = await models.Cobroservbus.findAll({
    where: {
      servbusId: {
        [Op.eq]: servbus.id
      }
    }
  }); 
  //----------------------------------------------------------

  //--Búsqueda de la Unidad a editar------------------------------------------
  let unidads = await models.Unidad.findAll({
    where: {
      id: {
        [Op.eq]: servbus.unidadId
      }
    }
  });
  //--------------------------------------------------------------------------

  //---Búsqueda del Servicio a editar------------------------------------
  let services = await models.Service.findAll({
    where: {
      id: {
        [Op.eq]: servbus.serviceId
      }
    }
  });
  //---------------------------------------------------------------

 //---------Búsqueda de grupo al cual pertenece la Unidad seleccionada por el usuario
  // para establecer el monto a pagar
  const unidd = await models.Unidad.findByPk(servbus.unidadId);
  const grupUnidad = await unidd.getGrupos().map( (grupo) => {
    return {
      grupoId: grupo.id
    }
  });

 //------ Búsqueda de la Configuración del Servicio (Precio, Monto a Pagar...)  seleccionado en el body por el usuario,
 // de acuerdo al grupo al que pertenece ----------------------------------------------------------
 if (JSON.stringify(grupUnidad) !== '[]') {
   const confservice = await models.Confservice.findOne({
    where: {
      serviceId: {
        [Op.eq]: servbus.serviceId,
      },
      grupoId: {
        [Op.eq]: grupUnidad[0].grupoId,
      },      
    },
  });
   if (confservice) {
     monto = confservice.monto;
     servuelta = confservice.vuelta;
   }
 }
 //-----------------------------------------------------------

 //Búsqueda de operadores, se incluye sus cpc mayor a cero------------- 
 findOptionsOpe.include.push({
  model: models.Servbus,
  as: "servbuses",
  where: {
    cpc: {
      [Op.gt]: 0,
    },
  },
  required: false,
});

 const operadores = await models.Operador.findAll(findOptionsOpe);
 //-----------------------------------------------------
 

 let ope = 0;
 let ctapc = 0;
 let fechapc = "";
 let fechacaja = "";
 let suma = 0;
 let servbId = 0;
 let cobrar = {};

  //map de operadores, se ordena y se filtra el elemento servbus donde exista deuda. servbusId ASC
  const operadors = operadores.map((operar) => {
    ope = operar.servbuses.length;
    ctapc = 0;
    fechapc = 0;
    servbId = 0;

    if (ope > 0) {
      operar.servbuses.sort(function (a, b) {
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
        fechacaja = operar.servbuses[i].fecha;
        if (fechacaja < hoy) {
          servbId = operar.servbuses[i].id;
          ctapc = operar.servbuses[i].cpc;
          fechapc = fechacaja;
          suma = 0;
          if (ctapc > 0) {
            cobrar = cobrosAll.filter(
              (cobra) => cobra.servbusId === operar.servbuses[i].id
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
      servbId: servbId,
      fecha: fechapc,
      cpc: ctapc,
    };
  });
  //--------------------------------------------------------------------

 //--------Consulta de la vueltas recorridas en la fecha por la Unidad
 findOptions.where.fecha = caja.fecha.toISOString().split("T")[0];
 findOptions.where.unidadId = servbus.unidadId;
 findOptions.include.push({
  model: models.Servbus,
  as: "pertSerVue",
  include: [
  {
    model: models.Caja,
    as: "pertCajSer",
    include: [
    {
      model: models.Despacho,
      as: "pertDesCaj",
    },
    ],
  },
  ],
});

 const VueltasIds = await models.Vuelt.findAll(findOptions);
  //-------------------------------------------------------------

  //----Consulta de los registros que realizaron cobros tmp del cpc de este registro a editar
  //---objeto requerido en la sentencia posterior 
  const tmpcobranza = await models.Tmpcobrobus.findAll({
    where: {
      servbuscId: {
        [Op.eq]: servbus.id,
      },
    },
  });
  //---------------------------------------------------------------

  let cpc = 0;
  let serId = 0;
  let sercId = 0;
  let vltasRec = 0;
  let montoAcu = 0;
  let acc = 0;
  let vltasAnt = 0;
  const servbusVuelAnt = VueltasIds.findIndex(  (vta, index) =>  vta.servbusId === servbus.id );
  //-----Del objeto VueltasIds se mapea con el fin de verificar sí cpc fue cobrada por una vuelta posterior, la vuelta mayor
  //--recorrida, el monto acumulado, agrupar una salida de acuerdo a los requerimientos de la vista edit
  let servbusVueltasIds = VueltasIds.map((serbusVta) => {
    cpc = serbusVta.pertSerVue.cpc;
    serId = serbusVta.pertSerVue.id;
    const catvueltId = serbusVta.catvueltId !== null ? serbusVta.catvueltId : 0;
    if (catvueltId > vltasRec) { vltasRec = catvueltId; }
    if ((catvueltId > vltasAnt) && (catvueltId !== VueltasIds[servbusVuelAnt].catvueltId)) { vltasAnt = catvueltId; }
    acc = serbusVta.pertSerVue.monto !== null ? serbusVta.pertSerVue.monto : 0;
    montoAcu = montoAcu + acc;

    const cobrado = tmpcobranza.filter((cobra) => cobra.servbusId === serId);

    console.log(JSON.stringify(cobrado));

    if (JSON.stringify(cobrado) !== "[]") {
      cpc = cobrado[0].monto;
      sercId = cobrado[0].servbuscId;
    }

    return {
      id: serbusVta.id,
      catvueltId: catvueltId,
      servbusId: serId,
      efectivo: serbusVta.pertSerVue.efectivo,
      cpc: cpc,
      dctoFalla: serbusVta.pertSerVue.dctoFalla,
      dctoSinietro: serbusVta.pertSerVue.dctoSinietro,
      dctoAutoridad: serbusVta.pertSerVue.dctoAutoridad,
      color: serbusVta.pertSerVue.pertCajSer.pertDesCaj.color,
      servbuscId: sercId,
    };
  });

  //--Para la salida se omite la vuelta del registro a editar---
  servbusVueltasIds = servbusVueltasIds.filter(
    (vuelta) => vuelta.id !== servbus.id
    );
  //--------------------------------------------------------------------------------------------

  //-------------Posterior a la consulta anterior se busca el valor de la vuelta mayor recorrida 
  const indexCatVlta = allCatvuelts.findIndex(  (vta, index) =>  vta.id === vltasRec );
  const indexCatVltAnt = allCatvuelts.findIndex(  (vta, index) =>  vta.id === vltasAnt );
  const indexCatVltEdit = allCatvuelts.findIndex(  (vta, index) =>  vta.id === VueltasIds[servbusVuelAnt].catvueltId );

  let vtaRecda = indexCatVlta !== -1 ? allCatvuelts[indexCatVlta].valor : 0;
  const vtaAnt = indexCatVltAnt !== -1 ? allCatvuelts[indexCatVltAnt].valor : 0;
  const MontoActual = VueltasIds[servbusVuelAnt].pertSerVue.monto !== null ? VueltasIds[servbusVuelAnt].pertSerVue.monto : 0;
  let vltaActual = vtaRecda - vtaAnt;
  vltaActual = vltaActual !== 0 ? vltaActual : allCatvuelts[indexCatVltEdit].valor;
  
  montoAcu = montoAcu - MontoActual;
  vtaRecda = vtaRecda - vltaActual;
  //-----------------------------------------------------------------------------

  //---- En el caso que el usuario seleccione monto a pagar diferentes en cada vuelta, se
  //--- lleva la diferencia a restar al monto a pagar de acuerdo a su selección actual
  if (monto === 0 ) { monto = services[0].monto; }

  const resMonto = montoAcu - (vtaRecda * monto);
  const resMonto2 = montoAcu - (vtaRecda * services[0].monto2);
  const resMonto3 = montoAcu - (vtaRecda * services[0].monto3);
  //-----------------------------------------------------------------------------

  //-------Se evalua sí este registro a editar creó un cpc y ya fué cobrada en la vueltas posteriores
  const tmpcobro = await models.Tmpcobrobus.findOne({
    where: {
      servbusId: {
        [Op.eq]: servbus.id,
      },
    },
  });

  let mensaje = "";
  let tmpmonto = 0;

  //-------Sí fue cobrada se consulta en que vuelta
  if (JSON.stringify(tmpcobro) !== "null") {
    const serviciobus = await models.Vuelt.findOne({
      where: {
        servbusId: {
          [Op.eq]: tmpcobro.servbuscId,
        },
      },
      include: [
      {
        model: models.Catvuelt,
        as: "pertCatvVue",
      },
      ],
    });
    tmpmonto = tmpcobro.monto;
    mensaje = `Tenga en cuenta que la CPC monto: ${tmpcobro.monto} fué cobrada en la Vuelta ${serviciobus.pertCatvVue.vuelta}`;
  }
  //-----------------------------------------------------------------------------------------

  servbus = {
    id: servbus.id,
    monto: servbus.monto,
    monto2: monto+'T'+resMonto,
    descMont: services[0].descMont,
    monto3: services[0].monto2+'T'+resMonto2,
    descMont2: services[0].descMont2,
    monto4: services[0].monto3+'T'+resMonto3,
    descMont3: services[0].descMont3,
    fecha: caja.fecha,
    efectivo: servbus.efectivo,
    banco: servbus.banco,
    cpc: servbus.cpc,
    anticipo: servbus.anticipo,
    dctoFalla: servbus.dctoFalla,
    dctoSinietro: servbus.dctoSinietro,
    dctoAutoridad: servbus.dctoAutoridad,
    cajaId: caja.id,
    unidadId: servbus.unidadId,
    serviceId: servbus.serviceId,
    operadorId: servbus.operadorId,
    mensaje: mensaje,
    tmpmonto: tmpmonto,
    servuelta: servuelta
  };

  res.render("servbuses/edit.ejs", {
    servbus,
    services,
    unidads,
    operadors,
    allCatvuelts,
    servbusVueltasIds,
  });
};

//-----------------------------------------UPDATE------------------------------------------
// PUT /cajas/:cajaId/servbuses/:servbusId
exports.update = async (req, res, next) => {
  const { caja } = req.load;
  const cajaId = caja.id;
  const { servbus } = req.load;
  const authorId = (req.loginUser && req.loginUser.id) || 0;
  let servbId = 0;

  let {
    monto,
    fecha,
    efectivo,
    banco,
    cpc,
    anticipo,
    dctoFalla = 0,
    dctoSinietro = 0,
    dctoAutoridad = 0,
    unidadId,
    serviceId,
    operadorId = 1,
    catvueltId = 0,
    cpcOper = "",
    cobrotxt = "",
    cpcIds = [],
    catvueltId2 = 0,
    chMonto = 0,
    servuelta = false
  } = req.body;

  let vltCanceladas = catvueltId2;
  const montoUnitario = chMonto.split("T")[0];

  if (servuelta === 'true') {

    const catVlta = await models.Catvuelt.findByPk(vltCanceladas);

    if (catVlta) {
      vltCanceladas = catVlta.valor;
    }

    if (cpcOper === "on" && cobrotxt !== "") {
      efectivo = efectivo - cobrotxt;
      monto = monto - cobrotxt;
    }
    servbId = operadorId.split("T")[1];
    operadorId = operadorId.split("T")[0];
  }

  servbus.monto = monto;
  servbus.fecha = fecha;
  servbus.efectivo = efectivo;
  servbus.banco = banco;
  servbus.cpc = cpc;
  servbus.anticipo = anticipo;
  servbus.dctoFalla = dctoFalla;
  servbus.dctoSinietro = dctoSinietro;
  servbus.dctoAutoridad = dctoAutoridad;
  servbus.cajaId = caja.id;
  servbus.unidadId = unidadId;
  servbus.serviceId = serviceId;
  servbus.operadorId = operadorId;

  try {
    await servbus.save({
      fields: [
      "monto",
      "fecha",
      "efectivo",
      "banco",
      "cpc",
      "anticipo",
      "dctoFalla",
      "dctoSinietro",
      "dctoAutoridad",
      "cajaId",
      "unidadId",
      "serviceId",
      "operadorId",
      ],
    });

    if (servuelta === 'true') {
      const vuelta = await models.Vuelt.findOne({
        where: {
          servbusId: {
            [Op.eq]: servbus.id,
          },
        }
      });
      vuelta.fecha = fecha;
      vuelta.vltCanceladas = vltCanceladas;
      vuelta.montoUnitario = montoUnitario;
      vuelta.catvueltId = catvueltId;
      await vuelta.save({ fields: ["fecha", "vltCanceladas", "montoUnitario", "catvueltId"] });


      const resettmpcobro = await models.Tmpcobrobus.findAll({
        where: {
          servbuscId: {
            [Op.eq]: servbus.id,
          },
        },
      });

      if (JSON.stringify(resettmpcobro) !== "null") {
        resettmpcobro.forEach(async (cobro) => {
          const resetservb = await models.Servbus.findByPk(cobro.servbusId);
          resetservb.monto = resetservb.monto + cobro.monto;
          resetservb.cpc = cobro.monto;
          await resetservb.save({ fields: ["monto", "cpc"] });
        });
        await models.Tmpcobrobus.destroy({
          where: {
            servbuscId: {
              [Op.eq]: servbus.id,
            },
          },
        });
      }
      if (cpcIds.length > 0) {
        const servbuscId = servbus.id;
        cpcIds.forEach(async (serbusId) => {
          const servbusesId = await models.Servbus.findByPk(serbusId);
          const monto = servbusesId.cpc;
          const servbusId = servbusesId.id;
          let tmpcobrobus = models.Tmpcobrobus.build({
            monto,
            fecha,
            servbusId,
            servbuscId,
          });
          tmpcobrobus = await tmpcobrobus.save({
            fields: ["monto", "fecha", "servbusId", "servbuscId"],
          });
          servbusesId.monto = servbusesId.monto - monto;
          servbusesId.cpc = 0;
          await servbusesId.save({ fields: ["monto", "cpc"] });
        });
      }

      if (cpcOper === "on" && cobrotxt !== "") {
        const monto = cobrotxt;
        const servbusId = servbId;
        let cobroservbus = models.Cobroservbus.build({
          monto,
          fecha,
          servbusId,
          cajaId,
        });
        cobroservbus = await cobroservbus.save({
          fields: ["monto", "fecha", "servbusId", "cajaId"],
        });
      }
    }
    req.flash("success", "Servicio editado Exitosamente.");

    res.redirect("/cajas/" + caja.id + "/servbuses");
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      req.flash("error", "Hay un error en el formulario:");
      error.errors.forEach(({ message }) => req.flash("error", message));
      res.render("servbuses/", { servbus });
    } else {
      req.flash("error", "Error editando el Servicio: " + error.message);
      next(error);
    }
  }
};

// DELETE /cajas/:cajaId/servbuses/:servbusId
exports.destroy = async (req, res, next) => {
  const { caja } = req.load;
  const serviceId = req.load.servbus.serviceId;
  const id = req.load.servbus.id;
  
  try {

    if (serviceId === 1) {
      const resettmpcobro = await models.Tmpcobrobus.findAll({
        where: {
          servbuscId: {
            [Op.eq]: id,
          },
        },
      });

      if (JSON.stringify(resettmpcobro) !== "null") {
        resettmpcobro.forEach(async (cobro) => {
          const resetservb = await models.Servbus.findByPk(cobro.servbusId);
          resetservb.monto = resetservb.monto + cobro.monto;
          resetservb.cpc = cobro.monto;
          await resetservb.save({ fields: ["monto", "cpc"] });
        });
        await models.Tmpcobrobus.destroy({
          where: {
            servbuscId: {
              [Op.eq]: id,
            },
          },
        });
      }

      const vuelt = await models.Vuelt.findOne({
        where: {
          servbusId: {
            [Op.eq]: id,
          },
        },
      });

      if (JSON.stringify(vuelt) !== "null") {

        await vuelt.destroy();
      }
    }
    
    await req.load.servbus.destroy();
    req.flash("success", "Servicio borrado Exitosamente.");
    res.redirect("/cajas/" + caja.id + "/servbuses");
  } catch (error) {
    req.flash("error", "Error borrando el Servcio: " + error.message);
    next(error);
  }
};
