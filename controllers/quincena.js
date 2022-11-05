const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getSumPagoNomina = require("../data/getSumPagoNomina");
const getSumPagoPrestamo = require("../data/getSumPagoPrestamo");
const getSalario = require("../data/getSalario");

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
const {caja} = req.load;
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
            },
            ]
        }).map( async(nom) => {
            let salario = await getSalario(nom.empleadoId);
            let sumPrestamos = await getSumPagoPrestamo(nom.id);
            let sumPagos = await getSumPagoNomina(nom.id);
            const montoSalario = salario.monto;

             const total = sumPagos + sumPrestamos + nom.montoFalta;

            const saldo = montoSalario - total;

            return{
                id: nom.id,
                salario: montoSalario,
                diasFalta: nom.diasFalta,
                montoFalta: nom.montoFalta,
                diasFaltaDescripcion: nom.diasFaltaDescripcion,
                dctoPrestamoIds: nom.dctoPrestamoIds,
                dctoPrestamoTotal: sumPrestamos,
                pagos: sumPagos,
                saldo: saldo.toFixed(2),
                desde: nom.pertQuiNom.desde,
                hasta: nom.pertQuiNom.hasta,
                nombres: nom.pertEmpNom.nombres,
                empleadoId: nom.empleadoId,
            }
        });

        res.render('nominas/quincenas/index.ejs', {nominas, caja});
    } catch (error) {
        next(error);
    }

};
