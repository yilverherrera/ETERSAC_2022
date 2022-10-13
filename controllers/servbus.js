const { and } = require("sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");

//----------------SERVICIOS-----------

// Autoload el servbus asociado a :servbusId
exports.load = async (req, res, next, servbusId) => {
  try {
    const servbus = await models.Servbus.findByPk(servbusId);
    if (servbus) {
      req.load = { ...req.load, servbus };
      next();
    } else {
      throw new Error("No hay service con id=" + servbusId);
    }
  } catch (error) {
    next(error);
  }
};

// MW - El registro se podrá borrar genera una cpc y ya fué cobrada 
exports.childlessRequired = async (req, res, next) => {
  const servbusId = req.load.servbus.id;
  try {
    const servbus = await models.Tmpcobrobus.findOne({
      where: {
        servbusId: {
          [Op.eq]: servbusId
        }
      }
    });
    console.log('OLA ACCESO-------------------------------------------------------');
    if (!servbus) {
      next();
    } else {
      throw new Error("Error al intentar eliminar, la CPC de este registro fué cobrada en otra Vuelta");
    }
  } catch (error) {
    next(error);
  }
};

// GET /cajas/:cajaId/servbuses
exports.index = async (req, res, next) => {
  let findOptions = {
    where: {},
    include: [],
    order: [["serviceId", "ASC"]],
  };

  const { caja } = req.load;

  findOptions.where.cajaId = caja.id;

  findOptions.include.push({
    model: models.Unidad,
    as: "pertUniSer",
  });

  findOptions.include.push({
    model: models.Service,
    as: "pertSerSer",
  });

  findOptions.include.push({
    model: models.Vuelt,
    as: "vuelts",
    include: [
      {
        model: models.Catvuelt,
        as: "pertCatvVue",
      },
    ],
  });
  try {
 	const despacho = await models.Despacho.findByPk(caja.despachoId);
if (despacho) {
      res.locals.lcDespacho = despacho.name;
	res.locals.lcFecha = caja.fecha.toISOString().split("T")[0];
    }
    const servbuses = await models.Servbus.findAll(findOptions);
    const services = await models.Service.findAll();
    let vlta = "";
    let servibuses = servbuses.map((servb) => {
      console.log(JSON.stringify(servb.vuelts));
      vlta =
        JSON.stringify(servb.vuelts) !== "[]"
          ? servb.vuelts[0].pertCatvVue.valor
          : "";
      return {
        id: servb.id,
        monto: servb.monto,
        efectivo: servb.efectivo,
        cpc: servb.cpc,
        dctoFalla: servb.dctoFalla,
        dctoSinietro: servb.dctoSinietro,
        dctoAutoridad: servb.dctoAutoridad,
        codigo: servb.pertUniSer.codigo,
        placa: servb.pertUniSer.placa,
        serviceId: servb.pertSerSer.id,
        vuelta: vlta,
      };
    });
    servibuses = servibuses.sort(function (a, b) {
      
      if (parseInt(a.codigo) > parseInt(b.codigo)) {
        return 1;
      }
      if (parseInt(a.codigo) < parseInt(b.codigo)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    res.render("servbuses/index.ejs", { caja, servibuses, services });
  } catch (error) {
    next(error);
  }
};

// GET /cajas/:cajaId/servbuses/:servbusId
exports.show = async (req, res, next) => {
  const { caja } = req.load;
  const { servbus } = req.load;

  let findOptions = {
    where: {},
    include: [],
  };

  let findOptionsVlta = {
    where: {},
    include: [],
  };

  findOptions.where.id = servbus.id;

  findOptionsVlta.where.servbusId = servbus.id;

  findOptions.include.push({
    model: models.Unidad,
    as: "pertUniSer",
  });

  findOptions.include.push({
    model: models.Operador,
    as: "pertOpeSer",
  });

  findOptionsVlta.include.push({
    model: models.Catvuelt,
    as: "pertCatvVue",
  });

  const servibus = await models.Servbus.findOne(findOptions);

  const vuelt = await models.Vuelt.findOne(findOptionsVlta);

  res.render("servbuses/show", { caja, servibus, vuelt });
};

// GET /cajas/:cajaId/servbuses/new
exports.new = async (req, res, next) => {
  const { caja } = req.load;

  const unidads = await models.Unidad.findAll();

  const services = await models.Service.findAll();

  const servbus = {
    id: "",
    monto: 0,
descMont: '',
    monto2: 0,
descMont2: '',
    monto3: 0,
descMont3: '',
    monto4: 0,
    fecha: caja.fecha,
    efectivo: "0",
    banco: "",
    cpc: "",
    anticipo: "",
    dctoFalla: "",
    dctoSinietro: "",
    dctoAutoridad: "",
    cajaId: caja.id,
    unidadId: 0,
    serviceId: 0,
    operadorId: 0,
  };

  res.render("servbuses/new.ejs", { servbus, services, unidads });
};

// GET /cajas/:cajaId/servbuses/:unidadId/:serviceId/newunis
exports.newServ = async (req, res, next) => {
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
  const { service } = req.load;

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

  const unidads = await models.Unidad.findAll({
    where: {
      id: {
        [Op.eq]: unidad.id,
      },
    },
  });
  const services = await models.Service.findAll();
  const cobrosAll = await models.Cobroservbus.findAll();
  const operadores = await models.Operador.findAll(findOptionsOpe);
  const allCatvuelts = await models.Catvuelt.findAll();
  const hoy = caja.fecha.toISOString().split("T")[0];

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

  findOptions.where.fecha = caja.fecha.toISOString().split("T")[0];
  findOptions.where.unidadId = unidad.id;
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

  let cpc = 0;
  let serId = 0;
  let sercId = 0;
  let vltasRec = 0;
let montoAcu = 0;
let acc = 0;
  const servbusVueltasIds = VueltasIds.map((serbusVta) => {
    cpc = serbusVta.pertSerVue.cpc !== null ? serbusVta.pertSerVue.cpc : "";
    serId = serbusVta.pertSerVue.id !== null ? serbusVta.pertSerVue.id : "";
    const catvueltId = serbusVta.catvueltId !== null ? serbusVta.catvueltId : 0;
    if (catvueltId > vltasRec) { vltasRec = catvueltId; }
acc = serbusVta.pertSerVue.monto !== null ? serbusVta.pertSerVue.monto : 0;
    montoAcu = montoAcu + acc;


    return {
      id: serbusVta.id !== null ? serbusVta.id : "",
      catvueltId: catvueltId,
      servbusId: serbusVta.pertSerVue.id !== null ? serbusVta.pertSerVue.id : "",
      efectivo: serbusVta.pertSerVue.efectivo !== null ? serbusVta.pertSerVue.efectivo : "",
      cpc: cpc,
      dctoFalla: serbusVta.pertSerVue.dctoFalla !== null ? serbusVta.pertSerVue.dctoFalla : "",
      dctoSinietro: serbusVta.pertSerVue.dctoSinietro !== null ? serbusVta.pertSerVue.dctoSinietro : "",
      dctoAutoridad: serbusVta.pertSerVue.dctoAutoridad !== null ? serbusVta.pertSerVue.dctoAutoridad : "",
      color: serbusVta.pertSerVue.pertCajSer.pertDesCaj.color !== null ? serbusVta.pertSerVue.pertCajSer.pertDesCaj.color : "",
      servbuscId: sercId,
    };
  });
  const indexCatVlta = allCatvuelts.findIndex(  (vta, index) =>  vta.id === vltasRec );
const montoRecda = montoAcu;
const vtaRecda = allCatvuelts[indexCatVlta].valor;
const resMonto = montoRecda - (vtaRecda * service.monto);
const resMonto2 = montoRecda - (vtaRecda * service.monto2);
const resMonto3 = montoRecda - (vtaRecda * service.monto3);

  const servbus = {
    id: "",
    monto: service.monto,
    monto2: service.monto+'T'+resMonto,
descMont: service.descMont,
    monto3: service.monto2+'T'+resMonto2,
descMont2: service.descMont2,
    monto4: service.monto3+'T'+resMonto3,
descMont3: service.descMont3,
    fecha: caja.fecha,
    efectivo: "0",
    banco: "",
    cpc: "",
    anticipo: "",
    dctoFalla: "",
    dctoSinietro: "",
    dctoAutoridad: "",
    cajaId: caja.id,
    unidadId: unidad.id,
    serviceId: service.id,
    operadorId: 0,
  };

  res.render("servbuses/new.ejs", {
    servbus,
    services,
    unidads,
    operadors,
    allCatvuelts,
    servbusVueltasIds,
  });
};

// POST /cajas/:cajaId/servbuses/create
exports.create = async (req, res, next) => {
  const unidads = await models.Unidad.findAll();
  const services = await models.Service.findAll();
  const { caja } = req.load;
  const cajaId = caja.id;

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
  } = req.body;

  if (serviceId === "1") {
    console.log(serviceId);
    servbId = operadorId.split("T")[1];
    operadorId = operadorId.split("T")[0];

    if (cpcOper === "on" && cobrotxt !== "") {
      efectivo = efectivo - cobrotxt;
      monto = monto - cobrotxt;
    }
  }

  let servbus = models.Servbus.build({
    monto,
    fecha,
    efectivo,
    banco,
    cpc,
    anticipo,
    dctoFalla,
    dctoSinietro,
    dctoAutoridad,
    cajaId,
    unidadId,
    serviceId,
    operadorId,
  });

  try {
    // Saves only the fields question and answer into the DDBB
    servbus = await servbus.save({
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

    if (serviceId === "1") {
      const servbusId = servbus.id;
      let vuelt = models.Vuelt.build({
        fecha,
        servbusId,
        unidadId,
        catvueltId,
      });

      vuelt = await vuelt.save({
        fields: ["fecha", "servbusId", "unidadId", "catvueltId"],
      });

      if (cpcIds.length > 0) {
        const servbuscId = servbusId;
        cpcIds.forEach(async (serbusId) => {
          const servbusesId = await models.Servbus.findByPk(serbusId);
          let monto = servbusesId.cpc;
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

          servbusesId.cpc = 0;
          servbusesId.monto = servbusesId.monto - monto;
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

    req.flash("success", "Servicio Creado Exitosamente.");
    res.redirect("/cajas/" + caja.id + "/servbuses");
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      req.flash("error", "Hay errores en el formulario");
      error.errors.forEach(({ message }) => req.flash("error", message));
      res.render("servbuses/new.ejs", { servbus, services, unidads });
    } else {
      req.flash("error", "Error creando el nuevo Servicio: " + error.message);
      next(error);
    }
  }
};

// GET /cajas/:cajaId/servbuses/:servbusId/edit
exports.edit = async (req, res, next) => {
  let findOptions = {
    where: {},
    include: [],
  };
  let findOptionsOpe = {
    where: {},
    include: [],
  };
  const { caja } = req.load;
  let { servbus } = req.load;

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

  let unidads = await models.Unidad.findAll();
  let services = await models.Service.findAll();
  const cobrosAll = await models.Cobroservbus.findAll();
  const operadores = await models.Operador.findAll(findOptionsOpe);
  const allCatvuelts = await models.Catvuelt.findAll();
  const hoy = caja.fecha.toISOString().split("T")[0];

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

  const VltaIds = VueltasIds.filter(
    (vuelta) => vuelta.servbusId !== servbus.id
  );

  const tmpcobranza = await models.Tmpcobrobus.findAll({
    where: {
      servbuscId: {
        [Op.eq]: servbus.id,
      },
    },
  });

  let cpc = 0;
  let serId = 0;
  let sercId = 0;
  const servbusVueltasIds = VltaIds.map((serbusVta) => {
    cpc = serbusVta.pertSerVue.cpc;
    serId = serbusVta.pertSerVue.id;

    const cobrado = tmpcobranza.filter((cobra) => cobra.servbusId === serId);

    console.log(JSON.stringify(cobrado));

    if (JSON.stringify(cobrado) !== "[]") {
      cpc = cobrado[0].monto;
      sercId = cobrado[0].servbuscId;
    }

    return {
      id: serbusVta.id,
      catvueltId: serbusVta.catvueltId,
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

  const tmpcobro = await models.Tmpcobrobus.findOne({
    where: {
      servbusId: {
        [Op.eq]: servbus.id,
      },
    },
  });

  let mensaje = "";
  let tmpmonto = 0;

  console.log(JSON.stringify(tmpcobro));

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
  unidads = unidads.filter((unid) => unid.id === servbus.unidadId);
  services = services.filter((serv) => serv.id === servbus.serviceId);
  servbus = {
    id: servbus.id,
    monto: servbus.monto,
    monto2: services[0].monto,
descMont: services[0].descMont,
	monto3: services[0].monto2,
descMont2: services[0].descMont2,
    monto4: services[0].monto3,
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
  } = req.body;

  if (serviceId === "1") {
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

    if (serviceId === "1") {
const vuelta = await models.Vuelt.findOne({
      where: {
        servbusId: {
          [Op.eq]: servbus.id,
        },
      }
    });
vuelta.fecha = fecha;
vuelta.catvueltId = catvueltId;
await vuelta.save({ fields: ["fecha", "catvueltId"] });

          
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
