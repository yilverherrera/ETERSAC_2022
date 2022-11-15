const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");
const getServbus = require("../data/getServbus");
const getVent = require("../data/getVent");
const getCobroservbus = require("../data/getCobroservbus");
const getCobrovent = require("../data/getCobrovent");
const getAnticipo = require("../data/getAnticipo");
const getBusgasto = require("../data/getBusgasto");
const getAdmgasto = require("../data/getAdmgasto");
const getPagonomina = require("../data/getPagonomina");
const getPagoprestfinanciero = require("../data/getPagoprestfinanciero");
const getPagoproveedor = require("../data/getPagoproveedor");
const getRetiro = require("../data/getRetiro");
const moment = require("moment");

const paginate = require("../helpers/paginate").paginate;

// Autoload el caja asociado a :cajaId
exports.load = async (req, res, next, cajaId) => {
  try {
    const caja = await models.Caja.findByPk(cajaId);
    if (caja) {
      req.load = { ...req.load, caja };
      next();
    } else {
      throw new Error("There is no caja with id=" + cajaId);
    }
  } catch (error) {
    next(error);
  }
};

// MW - Un usuario sólo puede crear 1 caja al dia.
exports.limitPerDay = async (req, res, next) => {
  const { despacho, fecha } = req.body;
  const LIMIT_PER_DAY = 1;

  let countOptions = {
    where: {
      authorId: req.loginUser.id,
      fecha: {
        [Op.eq]: fecha,
      },
      despachoId: {
        [Op.eq]: despacho,
      }
    },
  };

  try {
    const count = await models.Caja.count(countOptions);

    if (count < LIMIT_PER_DAY) {
      next();
    } else {
      req.flash("error", `Maximo ${LIMIT_PER_DAY} nuevas cajas por día.`);
      res.redirect("/goback");
    }
  } catch (error) {
    next(error);
  }
};

// MW that allows actions only if the user logged in is admin or is the author of the caja.
exports.adminOrAuthorRequired = (req, res, next) => {
  const isAdmin = !!req.loginUser.isAdmin;
  const isAuthor = req.load.caja.authorId === req.loginUser.id;

  if (isAdmin || isAuthor) {
    next();
  } else {
    console.log(
      "Prohibited operation: The logged in user is not the author of the caja, nor an administrator."
      );
    res.send(403+"No eres el Autor");
  }
};

// MW that allows actions only if the user logged in is admin or is the author of the caja.
exports.AuthorRequired = (req, res, next) => {
  const isAuthor = req.load.caja.authorId === req.loginUser.id;

  if (isAuthor) {
    next();
  } else {
    console.log(
      "Prohibited operation: The logged in user is not the author of the caja, nor an administrator."
      );
    res.send(403);
  }
};

// GET /cajas/:cajaId
exports.show = async (req, res, next) => {
  const {caja} = req.load;

  const servbus = await getServbus(caja.id);
  const vent = await getVent(caja.id);
  const cobroservbus = await getCobroservbus(caja.id);
  const cobrovent = await getCobrovent(caja.id);
  const anticipo = await getAnticipo(caja.id);
  const busgasto = await getBusgasto(caja.id);
  const admgasto = await getAdmgasto(caja.id);
  const pagonomina = await getPagonomina(caja.id);
  const pagoprestfinanciero = await getPagoprestfinanciero(caja.id);
  const pagoproveedor = await getPagoproveedor(caja.id);
  const retiro = await getRetiro(caja.id);
  const pago = pagonomina + pagoprestfinanciero + pagoproveedor;
  const cobro = cobroservbus + cobrovent;
  const totalIng = servbus + vent + cobro + anticipo + caja.salIni;
  const totalEgr = busgasto + admgasto + pago;
  let efectivo = totalIng - totalEgr;
  efectivo = efectivo - retiro;

  const box = {
    servbus: servbus.toFixed(2),
    vent: vent.toFixed(2),
    cobro: cobro.toFixed(2),
    anticipo: anticipo,
    busgasto: busgasto.toFixed(2),
    admgasto: admgasto.toFixed(2),
    pago: pago.toFixed(2),
    salIni: caja.salIni,
    totalIng: totalIng.toFixed(2),
    totalEgr: totalEgr.toFixed(2),
    retiro: retiro,
    efectivo: efectivo.toFixed(2),
  }
  try {
    res.json(box);
  } catch (error) {
    next(error);
  }
};

// GET /cajas
exports.index = async (req, res, next) => {
  let findOptions = {
    where: {},
    include: [],
    order: [['id', 'DESC']],
  };

  let title = "Cajas";

  // Search:

  // If there exists "req.load.user", then only the cajas of that user are shown
  if (req.load && req.load.user) {
    findOptions.where.authorId = req.load.user.id;

    if (req.loginUser && req.loginUser.id === req.load.user.id) {
      title = "Mis Cajas";
    } else {
      title = "Cajas de " + req.load.user.username;
    }
  }

  findOptions.include.push({
    model: models.Despacho,
    as: "pertDesCaj",
  });

  findOptions.include.push({
    model: models.User,
    as: "author",
  });

  try {
    const cajas = await models.Caja.findAll(findOptions).map(async(caja) => {
      const servbus = await getServbus(caja.id);
      const vent = await getVent(caja.id);
      const cobroservbus = await getCobroservbus(caja.id);
      const cobrovent = await getCobrovent(caja.id);
      const anticipo = await getAnticipo(caja.id);
      const busgasto = await getBusgasto(caja.id);
      const admgasto = await getAdmgasto(caja.id);
      const pagonomina = await getPagonomina(caja.id);
      const pagoprestfinanciero = await getPagoprestfinanciero(caja.id);
      const pagoproveedor = await getPagoproveedor(caja.id);
      const retiro = await getRetiro(caja.id);
      const pago = pagonomina + pagoprestfinanciero + pagoproveedor;
      const cobro = cobroservbus + cobrovent;
      const totalIng = servbus + vent + cobro + anticipo + caja.salIni;
      const totalEgr = busgasto + admgasto + pago;
      let efectivo = totalIng - totalEgr;
      efectivo = efectivo - retiro;

      return{
        id: caja.id,
        fecha: caja.fecha,
        authorId: caja.authorId,
        despacho: caja.pertDesCaj.name,
        author: caja.author.username,
        salIni: caja.salIni,
        totalIng: totalIng,
        totalEgr: totalEgr,
        retiro: retiro,
        efectivo: efectivo.toFixed(2),
        estatus: "",
      }
    });

    console.log(cajas);

    res.render("cajas/index.ejs", {
      cajas,
      title,
    });
  } catch (error) {
    next(error);
  }
};

// GET /cajas/new
exports.new = async (req, res, next) => {
  let findOptions = {
    where: {},
    include: [],
  };
  findOptions.include.push({
    model: models.Rout,
    as: "pertRouDes",
  });
  if (req.loginUser) {
    findOptions.include.push({
      model: models.User,
      as: "users",
      where: { id: req.loginUser.id },
    });
  }
  const despachos = await models.Despacho.findAll(findOptions);
  const caja = {
    fecha: "",
  };
  if (despachos.length > 0) {
    res.render("cajas/new", {
      caja,
      despachos,
    });
  } else {
    res.redirect("/users/" + req.loginUser.id + "/cajas");
    req.flash("error", "No estás asignado a un Despacho");
  }
};

// POST /cajas/create
exports.create = async (req, res, next) => {
  const { despacho, fecha } = req.body;
  const authorId = (req.loginUser && req.loginUser.id) || 0;
  const despachoId = despacho;
  const rout = await models.Despacho.findByPk(despachoId);
  const routId = rout.routId;
  const cierre = false;

  let caja = models.Caja.build({ fecha, cierre, authorId, despachoId, routId });

  try {
    // Saves only the fields question and answer into the DDBB
    caja = await caja.save({
      fields: ["fecha", "cierre", "authorId", "despachoId", "routId"],
    });
    req.flash("success", "Caja creada Exitosamente.");
    res.redirect("/users/" + authorId + "/cajas");
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      let findOptions = {
    where: {},
    include: [],
  };
  findOptions.include.push({
    model: models.Rout,
    as: "pertRouDes",
  });
  if (req.loginUser) {
    findOptions.include.push({
      model: models.User,
      as: "users",
      where: { id: req.loginUser.id },
    });
  }
  const despachos = await models.Despacho.findAll(findOptions);
      req.flash("error", "Hay errores en el formulario");
      error.errors.forEach(({ message }) => req.flash("error", message));
      res.render("cajas/new", { caja, despachos });
    } else {
      req.flash("error", "Error creando la nueva Caja: " + error.message);
      next(error);
    }
  }
};

// GET /cajas/:cajaId/edit
exports.edit = async (req, res, next) => {
  const { caja } = req.load;

  let despachoIds = [];

  despachoIds.push(caja.despachoId);

  let findOptions = {
    where: {},
    include: [],
  };
  findOptions.include.push({
    model: models.Rout,
    as: "pertRouDes",
  });

  const despachos = await models.Despacho.findAll(findOptions);

  res.render("cajas/edit", { caja, despachos, despachoIds });
};

// PUT /cajas/:cajaId
exports.update = async (req, res, next) => {
  const { body } = req;
  const { caja } = req.load;
  const authorId = (req.loginUser && req.loginUser.id) || 0;

  caja.despachoId = body.despacho;
  caja.fecha = body.fecha;

  try {
    await caja.save({ fields: ["fecha", "despachoId"] });
    req.flash("success", "Caja editada Exitosamente.");

    res.redirect("/cajas");
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      req.flash("error", "Hay un error en el formulario:");
      error.errors.forEach(({ message }) => req.flash("error", message));
      res.render("cajas/edit", { caja });
    } else {
      req.flash("error", "Error editando la caja: " + error.message);
      next(error);
    }
  }
};

// DELETE /cajas/:cajaId
exports.destroy = async (req, res, next) => {
  try {
    await req.load.caja.destroy();
    req.flash("success", "Caja borrada Exitosamente.");
    res.redirect("/cajas");
  } catch (error) {
    req.flash("error", "Error borrando la caja: " + error.message);
    next(error);
  }
};

