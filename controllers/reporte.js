const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// GET /reportes/new
exports.new = async (req, res, next) => {

    const unidads = await models.Unidad.findAll();

    const reporte =
    {
        mes: "",
        unidadId: "",
    };

    res.render('reportes/new', { reporte, unidads});

};