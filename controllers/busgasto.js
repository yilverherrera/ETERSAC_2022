const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");



//----------------BUSGASTOS-----------

// Autoload el cobro asociado a :busgastoId
exports.load = async (req, res, next, busgastoId) => {
  try {
    const busgasto = await models.Busgasto.findByPk(busgastoId);
    if (busgasto) {
      req.load = { ...req.load, busgasto };
      next();
    } else {
      throw new Error("There is no busgasto with id=" + busgastoId);
    }
  } catch (error) {
    next(error);
  }
};

// GET /cajas/:cajaId/busgastos
exports.index = async (req, res, next) => {
  let findOptions = {
    where: {},
    include: [],
  };

  const { caja } = req.load;

    findOptions.where.cajaId = caja.id;

  findOptions.include.push({
    model: models.Proveedor,
    as: "pertProBug",
  });

  findOptions.include.push({
    model: models.Detbusgasto,
    as: "detbusgastos",
    include:[{
      model: models.Reproducto,
      as: 'pertProDbg',
    },
    {
      model: models.Unidad,
      as: 'pertUniDbg'
    }]
  });





  try {
  const busgastos = await models.Busgasto.findAll(findOptions);
  console.log(JSON.stringify(busgastos));
    res.render("busgastos/", { busgastos, caja });
  } catch (error) {
    next(error);
  }
};

// GET /busgastos/new
exports.new = async (req, res, next) => {

  const unidads = await models.Unidad.findAll();
  const productos = await models.Reproducto.findAll();
  const proveedors = await models.Proveedor.findAll();
  const {caja} = req.load;

  const busgasto =
  {
   doc: "",
   tipoPago: 0,
   abonado: 0,
   unidadId: 0,
   reproductoId: 0,
   proveedorId: 0,
   cajaId: caja.id
 };

 res.render('busgastos/new', { busgasto, unidads, productos, proveedors});

};

// POST /busgastos/create
exports.create = async (req, res, next) => {

  const bus = req.body;
  const { caja } = req.load;

  const monto = bus.monto;
  const doc = bus.doc;
  const fecha = caja.fecha;
  const tipoPago = bus.tipoPago;
  let abonado = bus.abonado;
  if (tipoPago === 'contado') { abonado = monto; }
  const estatus = 0;
  const proveedorId = bus.proveedor;
  const cajaId = caja.id;

  let busgasto = models.Busgasto.build({ monto, doc, fecha, tipoPago, abonado, estatus, proveedorId, cajaId });

  try {
        // Saves only the fields name into the DDBB
        busgasto = await busgasto.save();

        const busgastoId = busgasto.id;

        const detCaja = bus.productos.map(  (prod) => {
          const total = prod.cant * prod.costoUni;
          return{
            fecha: fecha,
            costoUni: prod.costoUni,
            cant: prod.cant,
            total: total,
            reproductoId: prod.reproductoId,
            unidadId: prod.unidadId,
            busgastoId: busgastoId
          }
        });

        await models.Detbusgasto.bulkCreate(detCaja);

        res.json({ gasto: 'Creado Exitosamente' });
        
      } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
          res.json('Hay errores en el formulario:');
          res.json({ message: error.message });
        } else {
           res.json({ message: error.message });
          next(error)
        }
      }        
    
    
  };

  // DELETE /busgastos/:busgastoId
exports.destroy = async (req, res, next) => {
  const { caja } = req.load;

    try {
        await req.load.busgasto.destroy();
        req.flash('success', 'Gasto Operativo Eliminada Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/busgastos");
    } catch (error) {
        next(error);
    }
};


