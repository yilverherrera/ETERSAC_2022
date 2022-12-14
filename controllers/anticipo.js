const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getAnticiposUnidad = require('../data/getAnticiposUnidad');

// Autoload el anticipo asociado a :anticipoId
exports.load = async (req, res, next, anticipoId) => {

    try {
        const anticipo = await models.Anticipo.findByPk(anticipoId);
        if (anticipo) {
            req.load = {...req.load, anticipo};
            next();
        } else {
            throw new Error('There is no anticipo with id=' + anticipoId);
        }
    } catch (error) {
        next(error);
    }
};

// MW - El registro no se podrá borrar sí ya fué aplicado en otra operación
exports.childlessRequired = async (req, res, next) => {

  const anticipoId = req.load.anticipo.id;

  try {
    const anticipo = await models.Aplianticipo.findOne({
      where: {
        anticipoId: {
          [Op.eq]: anticipoId
        }
      }
    });
    
    if (!anticipo) {
      next();
    } else {
      throw new Error("Error al intentar eliminar, este anticipo ya fué aplicado en otra operación");
    }
  } catch (error) {
    next(error);
  }

};


// GET /anticipo
exports.index = async (req, res, next) => {

    const { caja } = req.load;

    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Unidad,
            as: "pertUniAnt"
        });

        findOptions.where.cajaId = caja.id;

        const anticipos = await models.Anticipo.findAll(findOptions);

         const despacho = await models.Despacho.findByPk(caja.despachoId);

    if (despacho) {
      res.locals.lcDespacho = despacho.name;
      res.locals.lcFecha = caja.fecha;
    }

        res.render('anticipos/index.ejs', {anticipos, caja});
    } catch (error) {
        next(error);
    }

};

// GET /anticipos/:unidadId
exports.show = async (req, res, next) => {

    const {unidad} = req.load;
  const anticipos = await getAnticiposUnidad(unidad.id);

    res.json(anticipos);
};

// GET /anticipos/:anticiposId
exports.mod = async (req, res, next) => {
    const {cajaId} = req.query;
    const {anticipo} = req.load;

    const caja = await models.Caja.findByPk(cajaId);

    const fecha = caja.fecha;

  anticipo.fecha = fecha;

try{
  await anticipo.save({ fields: ["fecha"] });
  res.json({ message: 'Fecha a aplicar cambiada Exitosamente', refresh: 'vents' });
}catch (error) {

   res.json({message: 'Error'});
}
};

// GET /anticipos/:anticiposId
exports.rest = async (req, res, next) => {
    
    const {anticipo} = req.load;

    

    const fecha = anticipo.fechaCaja;

  anticipo.fecha = fecha;

try{
  await anticipo.save({ fields: ["fecha"] });
  res.json({ message: 'Fecha a aplicar restaurada Exitosamente', refresh: 'vents' });
}catch (error) {

   res.json({message: 'Error'});
}
};


// GET /anticipos/new
exports.new = async (req, res, next) => {

    const unidads = await models.Unidad.findAll();
    const {caja} = req.load;

    const anticipo =
    {
        efectivo: 0,
        unidadId: "",
        cajaId: caja.id  
    };

    res.render('anticipos/new', { anticipo, unidads});

};

// POST /anticipos/create
exports.create = async (req, res, next) => {

    const {efectivo, unidadId} = req.body;
    const unidads = await models.Unidad.findAll();
    const {caja} = req.load;
    const fecha = caja.fecha;
    const monto = efectivo;
    const cajaId = caja.id;
    const fechaCaja = caja.fecha;
    const saldo = efectivo;
    
    let anticipo = models.Anticipo.build({ monto, fecha, fechaCaja, saldo, unidadId, cajaId });

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
    }        
    
};



// DELETE /anticipos/:anticipoId
exports.destroy = async (req, res, next) => {
    const {caja} = req.load;

    try {
        await req.load.anticipo.destroy();
        req.flash('success', 'Anticipo Eliminada Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/anticipos");
    } catch (error) {
        next(error);
    }
};


