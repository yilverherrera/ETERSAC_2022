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
    const {caja} = req.load;

    const busgasto =
    {
       doc: "",
       tipoPago: 0,
        abonado: 0,
        unidadId: 0,
        cajaId: caja.id  
    };

    res.render('busgastos/new', { busgasto, unidads});

};
