const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");



//----------------COBROS-----------

// Autoload el cobro asociado a :cobroId
exports.load = async (req, res, next, cobroId) => {
  try {
    const cobro = await models.Cobroservbus.findByPk(cobroId);
    if (cobro) {
      req.load = { ...req.load, cobro };
      next();
    } else {
      throw new Error("There is no cobro with id=" + cobroId);
    }
  } catch (error) {
    next(error);
  }
};

// Autoload el cobro asociado a :cobroId
exports.loadv = async (req, res, next, cobrovId) => {
  try {
    const cobro = await models.Cobrovent.findByPk(cobrovId);
    if (cobro) {
      req.load = { ...req.load, cobro };
      next();
    } else {
      throw new Error("There is no cobro with id=" + cobrovId);
    }
  } catch (error) {
    next(error);
  }
};


// GET /cajas/:cajaId/cobros
exports.index = async (req, res, next) => {
  let findOptions = {
    where: {},
    include: [],
  };

  let findOptionsVta = {
    where: {},
    include: [],
  };

  const { caja } = req.load;

//Servicios-----------------------------------
findOptions.include.push({
  model: models.Servbus,
  as: "pertServCob",
  include: [
  {
    model: models.Unidad,
    as: "pertUniSer",
  },
  {
    model: models.Operador,
    as: "pertOpeSer"
  },
  {
    model:  models.Service,
    as: "pertSerSer"
  }
  ],
});

findOptions.include.push({
  model: models.Caja,
  as: "pertCajCob",
  where: { id: caja.id },
});

const cobranzaserv = await models.Cobroservbus.findAll(findOptions);

const cobrosserv = cobranzaserv.map((cobro) => {
  return {
    id: cobro.id,
    monto: cobro.monto,
    fecha: cobro.pertServCob.fecha,
    servicio: cobro.pertServCob.pertSerSer.nombre,
    codigo: cobro.pertServCob.pertUniSer.codigo,
    placa: cobro.pertServCob.pertUniSer.placa,
    nombre: cobro.pertServCob.pertOpeSer.nombre,
    apellido: cobro.pertServCob.pertOpeSer.apellido,
  };
});
 //--------------------------------------------
 
 //Ventas--------------------------------------- 
 findOptionsVta.include.push({
  model: models.Vent,
  as: "pertVenCob",
  include: [
  {
    model: models.Unidad,
    as: "pertUniVen",
  },
  {
    model: models.Operador,
    as: "pertOpeVen",
  },
  {
    model: models.Producto,
    as: "pertProVen"
  }
  ]
});

 findOptionsVta.include.push({
  model: models.Caja,
  as: "pertCajCobv",
  where: { id: caja.id },
});

 const cobranzavta = await models.Cobrovent.findAll(findOptionsVta);

 const cobrosvta = cobranzavta.map((cobro) => {
  return {
    id: cobro.id,
    monto: cobro.monto,
    producto: cobro.pertVenCob.pertProVen.nombre,
    codigo: cobro.pertVenCob.pertUniVen.codigo,
    placa: cobro.pertVenCob.pertUniVen.placa,
    nombre: cobro.pertVenCob.pertOpeVen.nombre,
    apellido: cobro.pertVenCob.pertOpeVen.apellido,
    fecha: cobro.pertVenCob.fecha
  };
});


  //---------------------------------------------------


  try {
    res.render("cobros/", { cobrosserv, cobrosvta, caja });
  } catch (error) {
    next(error);
  }
};

// GET /cobros/new
exports.new = async (req, res, next) => {

  const cpcs = await models.Servbus.findAll({
    where: {
      cpc: {
        [Op.gt]: 0
      }
    },
    group:['Servbus.id'], 
    attributes: [[Sequelize.fn('', Sequelize.col('Servbus.id')), 'id'],[Sequelize.fn('', Sequelize.col('Servbus.cpc')), 'cpc'],[Sequelize.fn('', Sequelize.col('Servbus.fecha')), 'fecha'],[Sequelize.fn('', Sequelize.col('pertUniSer.codigo')), 'codigo'],[Sequelize.fn('', Sequelize.col('pertUniSer.placa')), 'placa'],[Sequelize.fn('', Sequelize.col('pertOpeSer.nombre')), 'nombre'],[Sequelize.fn('', Sequelize.col('pertOpeSer.apellido')), 'apellido'],[Sequelize.fn('', Sequelize.col('pertSerSer.nombre')), 'service'],[Sequelize.fn('SUM', Sequelize.col('cobroservbus.monto')), 'total']], 
    include: [{model: models.Cobroservbus, as: 'cobroservbus', attributes:[]}, {model: models.Unidad, as: 'pertUniSer', attributes:[]}, {model: models.Operador, as: 'pertOpeSer', attributes:[]}, {model: models.Service, as: 'pertSerSer', attributes:[]}],
    raw: true,
    order: Sequelize.literal('total DESC')
  }).filter((cprc) => cprc.cpc > cprc.total );

  const cpcv = await models.Vent.findAll({
    where: {
      cpc: {
        [Op.gt]: 0
      }
    },
    group:['Vent.id'], 
    attributes: [[Sequelize.fn('', Sequelize.col('Vent.id')), 'id'],[Sequelize.fn('', Sequelize.col('Vent.cpc')), 'cpc'],[Sequelize.fn('', Sequelize.col('Vent.fecha')), 'fecha'],[Sequelize.fn('', Sequelize.col('pertUniVen.codigo')), 'codigo'],[Sequelize.fn('', Sequelize.col('pertUniVen.placa')), 'placa'],[Sequelize.fn('', Sequelize.col('pertOpeVen.nombre')), 'nombre'],[Sequelize.fn('', Sequelize.col('pertOpeVen.apellido')), 'apellido'],[Sequelize.fn('', Sequelize.col('pertProVen.nombre')), 'producto'],[Sequelize.fn('SUM', Sequelize.col('cobrovent.monto')), 'total']], 
    include: [{model: models.Cobrovent, as: 'cobrovent', attributes:[]}, {model: models.Unidad, as: 'pertUniVen', attributes:[]}, {model: models.Operador, as: 'pertOpeVen', attributes:[]}, {model: models.Producto, as: 'pertProVen', attributes:[]}],
    raw: true,
    order: Sequelize.literal('total DESC')
  }).filter((cprc) => cprc.cpc > cprc.total );

  const {caja} = req.load;

  const cobro =
  {
    efectivo: 0,
    cpcId: 0,
    cajaId: caja.id  
  };

  res.render('cobros/new', { cobro, cpcs, cpcv });

};

// POST /anticipos/create
exports.create = async (req, res, next) => {

  const {efectivo, cpcId} = req.body;
  const {caja} = req.load;
  const fecha = caja.fecha;
  const monto = efectivo;
  const cajaId = caja.id;
  const servbusId = cpcId.split("T")[0];
  const cobro = cpcId.split("T")[1];
  let cpc;


  if (cobro === '1') {
  cpc = models.Cobroservbus.build({ monto, fecha, servbusId, cajaId });
} else {
  const ventId = servbusId;
  cpc = models.Cobrovent.build({ monto, fecha, ventId, cajaId });
}

  try {
        // Saves only the fields name into the DDBB
        cpc = await cpc.save();
        req.flash('success', 'Cobro creado Exitosamente.');
        res.redirect('/cajas/' + caja.id + '/cobros');
        
      } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
          req.flash('error', 'Hay errores en el formulario:');
          error.errors.forEach(({message}) => req.flash('error', message));
        } else {
          req.flash('error', 'Error creating a new Cobro: ' + error.message);
          next(error)
        }
      }        

    };

    // GET /cobros/:cobroId
exports.show = (req, res, next) => {

    let {cobro} = req.load;

    cobro = {
      monto: cobro.monto,
      cpcId: cobro.servbusId
    }

     res.render('cobros/show', {cobro});
};

  // GET /cobros/v/:cobrovId
exports.showv = (req, res, next) => {

    let {cobro} = req.load;

    cobro = {
      monto: cobro.monto,
      cpcId: cobro.ventId
    }

     res.render('cobros/show', {cobro});
};

// DELETE /cobros/:cobroId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.cobro.destroy();
        req.flash('success', 'Cobro Eliminada Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/cobros");
    } catch (error) {
        next(error);
    }
  }

// DELETE /cobros/v/:cobrovId
exports.destroyv = async (req, res, next) => {
   const { caja } = req.load;

    try {
        await req.load.cobro.destroy();
        req.flash('success', 'Cobro Eliminada Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/cobros");
    } catch (error) {
        next(error);
    }
  }
