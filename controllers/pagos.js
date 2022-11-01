const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getPagoProveedors = require('../data/getPagoProveedors');



// GET /pagos
exports.index = async (req, res, next) => {

    const { caja } = req.load;

    try {
       

        const pagoproveedors = await getPagoProveedors(caja.id);
        const proveedors = await models.Proveedor.findAll();

        res.render('pagos/index.ejs', {pagoproveedors, proveedors, caja});
    } catch (error) {
        next(error);
    }

};

