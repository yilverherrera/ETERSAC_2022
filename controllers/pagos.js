const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getPagoProveedors = require('../data/getPagoProveedors');
const getPagoNominas = require('../data/getPagoNominas');


// GET /pagos
exports.index = async (req, res, next) => {

    const { caja } = req.load;

    try {
       

        const pagoproveedors = await getPagoProveedors(caja.id);
        const pagonominas = await getPagoNominas(caja.id);
        const proveedors = await models.Proveedor.findAll();
        const financieras = await models.Financiera.findAll();
        const quincenas = await models.Quincena.findAll({
            order: [['id','DESC']],
        });

         const despacho = await models.Despacho.findByPk(caja.despachoId);

    if (despacho) {
      res.locals.lcDespacho = despacho.name;
      res.locals.lcFecha = caja.fecha;
    }

        res.render('pagos/index.ejs', {pagoproveedors, pagonominas, proveedors, quincenas, financieras, caja});
    } catch (error) {
        next(error);
    }

};

