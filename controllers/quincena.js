const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el quincena asociado a :quincenaId
exports.load = async (req, res, next, quincenaId) => {

    try {
        const quincena = await models.Quincena.findByPk(quincenaId);
        if (quincena) {
            req.load = {...req.load, quincena};
            next();
        } else {
            throw new Error('There is no quincena with id=' + quincenaId);
        }
    } catch (error) {
        next(error);
    }
};

// GET /quincenas/:quincenaId
exports.index = async (req, res, next) => {
const {quincena} = req.load;
    try {

        const nominas = await models.Nomina.findAll({
            where:{
                quincenaId:{
                    [Op.eq]: quincena.id,
                }
            },
            include:[{
                model: models.Quincena,
                as: "pertQuiNom"
            },
            {
                model: models.Empleado,
                as: "pertEmpNom",
            }]
        });

        res.render('nominas/quincenas/index.ejs', {nominas});
    } catch (error) {
        next(error);
    }

};
