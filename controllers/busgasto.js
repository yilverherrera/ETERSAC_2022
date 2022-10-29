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

  let findOptionsVta = {
    where: {},
    include: [],
  };

  const { caja } = req.load;

findOptions.include.push({
  model: models.Proveedor,
  as: "pertProBug",
  });

findOptions.include.push({
  model: models.Detbusgasto,
  as: "detbusgastos",
    include:[{
      model: models.Producto,
      as: 'pertProDbg',
      model: models.Unidad,
      as: 'pertUniDbg'
    }]
  });


  findOptions.where.id = caja.id;


const busgastos = await models.Busgasto.findAll(findOptions);



  //---------------------------------------------------


  try {
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
console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');
    console.log(JSON.stringify(bus));
    console.log('------------------------------------------');
    console.log('------------------------------------------');
    console.log('------------------------------------------');
    res.json(bus);
    
    


    /*const unidads = await models.Unidad.findAll();
    const {caja} = req.load;
    const fecha = caja.fecha.toISOString().split("T")[0];
    const monto = efectivo;
    const cajaId = caja.id;
    const saldo = efectivo;
    
    let anticipo = models.Anticipo.build({ monto, fecha, saldo, unidadId, cajaId });

    try {
        // Saves only the fields name into the DDBB
        anticipo = await anticipo.save();
        req.flash('success', 'Anticipo creado Exitosamente.');
        res.redirect('/cajas/' + caja.id + '/anticipos');
        
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
            res.render('anticipo/new', {anticipo, unidads, caja});
        } else {
            req.flash('error', 'Error creating a new Anticipo: ' + error.message);
            next(error)
        }
    } */       
    
};
