const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// Autoload el retiro asociado a :retiroId
exports.load = async (req, res, next, retiroId) => {

    try {
        const retiro = await models.Retiro.findByPk(retiroId);
        if (retiro) {
            req.load = {...req.load, retiro};
            next();
        } else {
            throw new Error('There is no retiro with id=' + retiroId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /retiros
exports.index = async (req, res, next) => {

    const { caja } = req.load;

    try {
        let findOptions = {
            where: {},
            include: []
        }

        findOptions.include.push({
            model: models.Destino,
            as: "pertDesRet"
        });

        findOptions.where.cajaId = caja.id;

        const retiros = await models.Retiro.findAll(findOptions);

         const despacho = await models.Despacho.findByPk(caja.despachoId);

    if (despacho) {
      res.locals.lcDespacho = despacho.name;
      res.locals.lcFecha = caja.fecha;
    }

        res.render('retiros/index.ejs', {retiros, caja});
    } catch (error) {
        next(error);
    }

};


// GET /retiros/new
exports.new = async (req, res, next) => {

    const destinos = await models.Destino.findAll();
    const empleados = await models.Empleado.findAll();
    const {caja} = req.load;

    const retiro =
    {
        efectivoBillCien: 0,
        efectivoBillCincuenta: 0,
        efectivoBillVeinte: 0,
        efectivoBillDiez: 0,
        efectivoMonCinco: 0,
        efectivoMonDos: 0,
        efectivoMonUno: 0,
        efectivoMonCenCincuenta: 0,
        efectivoMonCenVeinte: 0,
        efectivoMonCenDiez: 0,
        mezclado: 0,
        monto: 0,
        destinoId: "",
        empleadoId: "",
        cajaId: caja.id  
    };

    res.render('retiros/new', { retiro, destinos, empleados });

};

// POST /retiros/create
exports.create = async (req, res, next) => {

     const {
        efectivoBillCien = 0,
        efectivoBillCincuenta = 0,
        efectivoBillVeinte = 0,
        efectivoBillDiez = 0,
        efectivoMonCinco = 0,
        efectivoMonDos = 0,
        efectivoMonUno = 0,
        efectivoMonCenCincuenta = 0,
        efectivoMonCenVeinte = 0,
        efectivoMonCenDiez = 0,
        mezclado = 0,
        destinoId,
        empleadoId,
    } = req.body;


    const {caja} = req.load;
    const fecha = caja.fecha;
    const monto = parseFloat(efectivoBillCien) + parseFloat(efectivoBillCincuenta) + parseFloat(efectivoBillVeinte) +
    parseFloat(efectivoBillDiez) + parseFloat(efectivoMonCinco) + parseFloat(efectivoMonDos) + parseFloat(efectivoMonUno) +
    parseFloat(efectivoMonCenCincuenta) + parseFloat(efectivoMonCenVeinte) + parseFloat(efectivoMonCenDiez) +
    parseFloat(mezclado);
    const cajaId = caja.id;
    
    let retiro = models.Retiro.build({ monto, efectivoBillCien, efectivoBillCincuenta, efectivoBillVeinte, efectivoBillDiez, efectivoMonCinco, efectivoMonDos, efectivoMonUno, efectivoMonCenCincuenta, efectivoMonCenVeinte, efectivoMonCenDiez, mezclado, fecha, destinoId, cajaId, empleadoId });

    try {
        // Saves only the fields name into the DDBB
        retiro = await retiro.save();
        req.flash('success', 'Retiro creado Exitosamente.');
        res.redirect('/cajas/' + caja.id + '/retiros');
        
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario:');
            error.errors.forEach(({message}) => req.flash('error', message));
        } else {
            req.flash('error', 'Error creating a new retiro: ' + error.message);
            next(error)
        }
    }        
    
};



// DELETE /retiros/:retiroId
exports.destroy = async (req, res, next) => {
    const {caja} = req.load;

    try {
        await req.load.retiro.destroy();
        req.flash('success', 'Retiro Eliminado Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/retiros");
    } catch (error) {
        next(error);
    }
};


