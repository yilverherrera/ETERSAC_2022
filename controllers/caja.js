const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { models } = require("../models");

const moment = require('moment');

const paginate = require('../helpers/paginate').paginate;


// Autoload el caja asociado a :cajaId
exports.load = async (req, res, next, cajaId) => {
    try {
        const caja = await models.Caja.findByPk(cajaId);
        if (caja) {
            req.load = { ...req.load, caja };
            next();
        } else {
            throw new Error('There is no caja with id=' + cajaId);
        }
    } catch (error) {
        next(error);
    }
};

// Autoload el servbus asociado a :servbusId
exports.loadServ = async (req, res, next, servbusId) => {
    try {
        const servbus = await models.Servbus.findByPk(servbusId);
        if (servbus) {
            req.load = { ...req.load, servbus };
            next();
        } else {
            throw new Error('There is no servbus with id=' + servbusId);
        }
    } catch (error) {
        next(error);
    }
};



// MW - Un usuario sólo puede crear 1 caja al dia.
exports.limitPerDay = async (req, res, next) => {

    const LIMIT_PER_DAY = 1;

    let countOptions = {
        where: {
            authorId: req.loginUser.id,
            createdAt: {
                [Op.lt]: new Date(),
                [Op.gt]: new Date(new Date() - 48 * 60 * 60 * 1000)
            }
        }
    };

    try {
        const count = await models.Caja.count(countOptions);

        if (count < LIMIT_PER_DAY) {
            next();
        } else {
            req.flash('error', `Maximo ${LIMIT_PER_DAY} nuevas cajas por día.`);
            res.redirect('/goback');
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
        console.log('Prohibited operation: The logged in user is not the author of the caja, nor an administrator.');
        res.send(403);
    }
};

// MW that allows actions only if the user logged in is admin or is the author of the caja.
exports.AuthorRequired = (req, res, next) => {

    const isAuthor = req.load.caja.authorId === req.loginUser.id;

    if (isAuthor) {
        next();
    } else {
        console.log('Prohibited operation: The logged in user is not the author of the caja, nor an administrator.');
        res.send(403);
    }
};

// GET /cajas
exports.index = async (req, res, next) => {

    let findOptions = {
        where: {},
        include: []
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
        as: 'pertDesCaj'
    });

    findOptions.include.push({
        model: models.User,
        as: 'author'
    });

    try {
        const cajas = await models.Caja.findAll(findOptions);
        res.render('cajas/index.ejs', {
            cajas,
            title
        });
    } catch (error) {
        next(error);
    }
};

// GET /cajas/new
exports.new = async (req, res, next) => {
    let findOptions = {
        where: {},
        include: []
    };
    findOptions.include.push({
        model: models.Rout,
        as: 'pertRouDes'
    });
    if (req.loginUser) {
        findOptions.include.push({
            model: models.User,
            as: "users",
            where: { id: req.loginUser.id }
        });
    }
    const despachos = await models.Despacho.findAll(findOptions);
    const caja = {
        fecha: ""
    };
    if (despachos.length > 0) {
        res.render('cajas/new', {
            caja,
            despachos
        });
    } else {
        res.redirect('/users/' + req.loginUser.id + '/cajas');
        req.flash('error', 'No estás asignado a un Despacho');
    }

};

// POST /cajas/create
exports.create = async (req, res, next) => {

    const { despacho, fecha } = req.body;
    const authorId = req.loginUser && req.loginUser.id || 0;
    const despachoId = despacho;
    const rout = await models.Despacho.findByPk(despachoId);
    const routId = rout.routId;

    let caja = models.Caja.build({ fecha, authorId, despachoId, routId });

    try {
        // Saves only the fields question and answer into the DDBB
        caja = await caja.save({ fields: ["fecha", "authorId", "despachoId", "routId"] });
        req.flash('success', 'Caja creada Exitosamente.');
        res.redirect('/users/' + authorId + '/cajas');

    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario');
            error.errors.forEach(({ message }) => req.flash('error', message));
            res.render('cajas/new', { caja });
        } else {
            req.flash('error', 'Error creando la nueva Caja: ' + error.message);
            next(error)
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
        include: []
    };
    findOptions.include.push({
        model: models.Rout,
        as: 'pertRouDes'
    });

    const despachos = await models.Despacho.findAll(findOptions);

    res.render('cajas/edit', { caja, despachos, despachoIds });
};

// PUT /cajas/:cajaId
exports.update = async (req, res, next) => {

    const { body } = req;
    const { caja } = req.load;
    const authorId = req.loginUser && req.loginUser.id || 0;

    caja.despachoId = body.despacho;
    caja.fecha = body.fecha;

    try {
        await caja.save({ fields: ["fecha", "despachoId"] });
        req.flash('success', 'Caja editada Exitosamente.');

        res.redirect('/cajas');

    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay un error en el formulario:');
            error.errors.forEach(({ message }) => req.flash('error', message));
            res.render('cajas/edit', { caja });
        } else {
            req.flash('error', 'Error editando la caja: ' + error.message);
            next(error);
        }
    }
};


// DELETE /cajas/:cajaId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.caja.destroy();
        req.flash('success', 'Caja borrada Exitosamente.');
        res.redirect('/cajas');
    } catch (error) {
        req.flash('error', 'Error borrando la caja: ' + error.message);
        next(error);
    }
};

//----------------SERVICIOS-----------
// GET /cajas/:cajaId/servbuses
exports.indexServ = async (req, res, next) => {
    let findOptions = {
        where: {},
        include: [],
        order: [['serviceId', 'ASC']]
    };

    const { caja } = req.load;

    findOptions.where.cajaId = caja.id;

    findOptions.include.push({
        model: models.Unidad,
        as: 'pertUniSer'
    });

    findOptions.include.push({
        model: models.Service,
        as: 'pertSerSer'
    });

    const servibuses = await models.Servbus.findAll(findOptions);
    const services = await models.Service.findAll();

    try {
        res.render('servbuses/index.ejs', { caja, servibuses, services });
    } catch (error) {
        next(error);
    }
};

// GET /cajas/:cajaId/servbuses/:servbusId
exports.showServ = async(req, res, next) => {

    const {caja} = req.load;
    const {servbus} = req.load;

    let findOptions = {
        where: {},
        include: []
    };

    let findOptionsVlta = {
        where: {},
        include: []
    };

    findOptions.where.id = servbus.id;

    findOptionsVlta.where.servbusId = servbus.id;

    findOptions.include.push({
        model: models.Unidad,
        as: 'pertUniSer'
    });

    findOptions.include.push({
        model: models.Operador,
        as: 'pertOpeSer'
    });

    findOptionsVlta.include.push({
        model: models.Catvuelt,
        as: 'pertCatvVue'
    });

    const servibus = await models.Servbus.findOne(findOptions);

    const vuelt = await models.Vuelt.findOne(findOptionsVlta);

    res.render('servbuses/show', { caja, servibus, vuelt });
};

// GET /cajas/:cajaId/servbuses/new
exports.newServ = async (req, res, next) => {

    const { caja } = req.load;

    const unidads = await models.Unidad.findAll();

    const services = await models.Service.findAll();

    const servbus = {
        monto: 0,
        fecha: caja.fecha,
        efectivo: "0",
        banco: "",
        cpc: "",
        anticipo: "",
        dctoFalla: "",
        dctoSinietro: "",
        dctoAutoridad: "",
        cajaId: caja.id,
        unidadId: 0,
        serviceId: 0,
        operadorId: 0
    };

    res.render('servbuses/new.ejs', { servbus, services, unidads });

};

// GET /cajas/:cajaId/servbuses/:unidadId/newuni
exports.newServUni = async (req, res, next) => {

    const { caja } = req.load;

    const { unidad } = req.load;

    const unidads = await models.Unidad.findAll();

    const services = await models.Service.findAll();

    const servbus = {
        monto: 0,
        fecha: caja.fecha,
        efectivo: "0",
        banco: "",
        cpc: "",
        anticipo: "",
        dctoFalla: "",
        dctoSinietro: "",
        dctoAutoridad: "",
        cajaId: caja.id,
        unidadId: unidad.id,
        serviceId: 0,
        operadorId: 0
    };

    res.render('servbuses/new.ejs', { servbus, services, unidads });

};

// GET /cajas/:cajaId/servbuses/:unidadId/:serviceId/newunis
exports.newServUnis = async (req, res, next) => {

    findOptions = {
        where: {},
        include: []
    };
    findOptionsOpe = {
        where: {},
        include: []
    };

    const { caja } = req.load;
    const { unidad } = req.load;
    const { service } = req.load;

    findOptionsOpe.include.push({
        model: models.Servbus,
        as: 'servbuses',
        where: {
            cpc: {
                [Op.gt]: 0
            }
        },
        required: false
    });

    const unidads = await models.Unidad.findAll();
    const services = await models.Service.findAll();
    const cobrosAll = await models.Cobroservbus.findAll();
    const operadores = await models.Operador.findAll(findOptionsOpe);
    const allCatvuelts = await models.Catvuelt.findAll();

    const hoy = caja.fecha.toISOString().split('T')[0];

    let ope = 0;
    let ctapc = 0;
    let fechapc = "";
    let fechacaja = "";
    let suma = 0;
    let servbId = 0;
    let cobrar = {};
    
    //map de operadores, se ordena y se filtra el elemento servbus donde exista deuda. servbusId ASC
    const operadors = operadores.map((operar) => {
        ope = operar.servbuses.length;
        ctapc = 0;
        fechapc = 0;
        servbId = 0;

        if (ope > 0) {
            operar.servbuses.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

            let i = 0;
            do {
                fechacaja = operar.servbuses[i].fecha;
                if (fechacaja < hoy) {
                    servbId = operar.servbuses[i].id;
                    ctapc = operar.servbuses[i].cpc;
                    fechapc = fechacaja;
                    suma = 0;
                    if (ctapc > 0) {
                        cobrar = cobrosAll.filter(cobra => cobra.servbusId === operar.servbuses[i].id);
                        if (cobrar.length > 0) {
                            cobrar.forEach(cobro => { suma = suma + cobro.monto });
                            ctapc = ctapc - suma;
                        }
                    }
                }
                i++;
            } while (ctapc === 0 &&  i < ope);
        }

        return {
            id: operar.id,
            nombre: operar.nombre,
            apellido: operar.apellido,
            servbId: servbId,
            fecha: fechapc,
            cpc: ctapc
        }
    });

    findOptions.where.fecha = caja.fecha.toISOString().split('T')[0];
    findOptions.where.unidadId = unidad.id;
    findOptions.include.push({
        model: models.Servbus,
        as: 'pertSerVue',
        include: [{
            model: models.Caja,
            as: "pertCajSer",
            include: [{
                model: models.Despacho,
                as: "pertDesCaj"
            }]
        }]
    });

    const VueltasIds = await models.Vuelt.findAll(findOptions);

    let cpc = 0;
    let serId = 0;
    const servbusVueltasIds = VueltasIds.map((serbusVta) => {
        cpc = serbusVta.pertSerVue.cpc;
        serId = serbusVta.pertSerVue.id;
       
        return {
            id: serbusVta.id,
            catvueltId: serbusVta.catvueltId,
            servbusId: serbusVta.pertSerVue.id,
            efectivo: serbusVta.pertSerVue.efectivo,
            cpc: cpc,
            dctoFalla: serbusVta.pertSerVue.dctoFalla,
            dctoSinietro: serbusVta.pertSerVue.dctoSinietro,
            dctoAutoridad: serbusVta.pertSerVue.dctoAutoridad,
            color: serbusVta.pertSerbVue.pertCajSer.pertDesCaj.color
        }

    });

    const servbus = {
        monto: service.monto,
        fecha: caja.fecha,
        efectivo: "0",
        banco: "",
        cpc: "",
        anticipo: "",
        dctoFalla: "",
        dctoSinietro: "",
        dctoAutoridad: "",
        cajaId: caja.id,
        unidadId: unidad.id,
        serviceId: service.id,
        operadorId: 0
    };

    res.render('servbuses/new.ejs', { servbus, services, unidads, operadors, allCatvuelts, servbusVueltasIds });

};


// POST /cajas/:cajaId/servbuses/create
exports.createServ = async (req, res, next) => {

    const unidads = await models.Unidad.findAll();
    const services = await models.Service.findAll();

    const { caja } = req.load;
    const cajaId = caja.id;

    let { monto, fecha, efectivo, banco, cpc, anticipo, dctoFalla, dctoSinietro, dctoAutoridad, unidadId, serviceId, operadorId, catvueltId, cpcOper, cobrotxt, cpcIds = [] } = req.body;
    const servbId = operadorId.split('T')[1];
    operadorId = operadorId.split('T')[0];

    if (dctoFalla == "") { dctoFalla = 0; }
    if (dctoSinietro == "") { dctoSinietro = 0; }
    if (dctoAutoridad == "") { dctoAutoridad = 0; }

    if ((cpcOper === 'on') && (cobrotxt !== "")) {
        efectivo = efectivo - cobrotxt;
        monto = monto - cobrotxt;
    }

    let servbus = models.Servbus.build({ monto, fecha, efectivo, banco, cpc, anticipo, dctoFalla, dctoSinietro, dctoAutoridad, cajaId, unidadId, serviceId, operadorId });

    try {
        // Saves only the fields question and answer into the DDBB
        servbus = await servbus.save({ fields: ["monto", "fecha", "efectivo", "banco", "cpc", "anticipo", "dctoFalla", "dctoSinietro", "dctoAutoridad", "cajaId", "unidadId", "serviceId", "operadorId"] });
        const servbusId = servbus.id;
        let vuelt = models.Vuelt.build({ fecha, servbusId, unidadId, catvueltId });
        vuelt = await vuelt.save({ fields: ["fecha", "servbusId", "unidadId", "catvueltId"] });
        if (cpcIds.length > 0) {
            const servbuscId = servbusId;
            cpcIds.forEach(async (serbusId) => {
                const servbusesId = await models.Servbus.findByPk(serbusId);
                const monto = servbusesId.cpc;
                const servbusId = servbusesId.id;
                let tmpcobrobus = models.Tmpcobrobus.build({ monto, fecha, servbusId, servbuscId });
                tmpcobrobus = await tmpcobrobus.save({ fields: ["monto", "fecha", "servbusId", "servbuscId"] });
                servbusesId.cpc = 0;
                await servbusesId.save({ fields: ["cpc"] });
            });
        }
        if ((cpcOper === 'on') && (cobrotxt !== "")) {
            const monto = cobrotxt;
            const servbusId = servbId;
            let cobroservbus = models.Cobroservbus.build({ monto, fecha, servbusId, cajaId });
            cobroservbus = await cobroservbus.save({ fields: ["monto", "fecha", "servbusId", "cajaId"] });
        }
        req.flash('success', 'Servicio Creado Exitosamente.');
        res.redirect('servbuses/index.ejs');

    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            req.flash('error', 'Hay errores en el formulario');
            error.errors.forEach(({ message }) => req.flash('error', message));
            res.render('servbuses/new.ejs', { servbus, services, unidads });
        } else {
            req.flash('error', 'Error creando el nuevo Servicio: ' + error.message);
            next(error)
        }
    }
};

// GET /cajas/:cajaId/servbuses/:servbusId/edit
exports.editServ  = async (req, res, next) => {

    findOptions = {
        where: {},
        include: []
    };
    findOptionsOpe = {
        where: {},
        include: []
    };

    const { caja } = req.load;
    let { servbus } = req.load;

    findOptionsOpe.include.push({
        model: models.Servbus,
        as: 'servbuses',
        where: {
            cpc: {
                [Op.gt]: 0
            }
        },
        required: false
    });

    let unidads = await models.Unidad.findAll();
    let services = await models.Service.findAll();
    const cobrosAll = await models.Cobroservbus.findAll();
    const operadores = await models.Operador.findAll(findOptionsOpe);
    const allCatvuelts = await models.Catvuelt.findAll();

    const hoy = caja.fecha.toISOString().split('T')[0];

    let ope = 0;
    let ctapc = 0;
    let fechapc = "";
    let fechacaja = "";
    let suma = 0;
    let servbId = 0;
    let cobrar = {};

    //map de operadores, se ordena y se filtra el elemento servbus donde exista deuda. servbusId ASC
    const operadors = operadores.map((operar) => {
        ope = operar.servbuses.length;
        ctapc = 0;
        fechapc = 0;
        servbId = 0;

        if (ope > 0) {
            operar.servbuses.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

            let i = 0;
            do {
                fechacaja = operar.servbuses[i].fecha;
                if (fechacaja < hoy) {
                    servbId = operar.servbuses[i].id;
                    ctapc = operar.servbuses[i].cpc;
                    fechapc = fechacaja;
                    suma = 0;
                    if (ctapc > 0) {
                        cobrar = cobrosAll.filter(cobra => cobra.servbusId === operar.servbuses[i].id);
                        if (cobrar.length > 0) {
                            cobrar.forEach(cobro => { suma = suma + cobro.monto });
                            ctapc = ctapc - suma;
                        }
                    }
                }
                i++;
            } while (ctapc === 0 &&  i < ope);
        }

        return {
            id: operar.id,
            nombre: operar.nombre,
            apellido: operar.apellido,
            servbId: servbId,
            fecha: fechapc,
            cpc: ctapc
        }
    });

    findOptions.where.fecha = caja.fecha.toISOString().split('T')[0];
    findOptions.where.unidadId = servbus.unidadId;
    findOptions.include.push({
        model: models.Servbus,
        as: 'pertSerVue',
        include: [{
            model: models.Caja,
            as: "pertCajSer",
            include: [{
                model: models.Despacho,
                as: "pertDesCaj"
            }]
        }]
    });

    const VueltasIds = await models.Vuelt.findAll(findOptions);

    const VltaIds = VueltasIds.filter( vuelta => vuelta.servbusId !== servbus.id );

    let cpc = 0;
    let serId = 0;
    const servbusVueltasIds = VltaIds.map((serbusVta) => {
        cpc = serbusVta.pertSerVue.cpc;
        serId = serbusVta.pertSerVue.id;
       
        return {
            id: serbusVta.id,
            catvueltId: serbusVta.catvueltId,
            servbusId: serbusVta.pertSerVue.id,
            efectivo: serbusVta.pertSerVue.efectivo,
            cpc: cpc,
            dctoFalla: serbusVta.pertSerVue.dctoFalla,
            dctoSinietro: serbusVta.pertSerVue.dctoSinietro,
            dctoAutoridad: serbusVta.pertSerVue.dctoAutoridad,
            color: serbusVta.pertSerVue.pertCajSer.pertDesCaj.color
        }

    });

    const tmpcobro = await models.Tmpcobrobus.findOne({ 
        where: {
            servbusId: {
                [Op.eq]: servbus.id
            }
        }
    });

    let mensaje = "";

    console.log(JSON.stringify(tmpcobro));
    
    if (JSON.stringify(tmpcobro) !== 'null') {
        const serviciobus = await models.Vuelt.findOne({ 
            where: {
                servbusId: {
                    [Op.eq]: tmpcobro.servbuscId
                }
            },
                include: [{
                    model: models.Catvuelt,
                    as: "pertCatvVue"
                }]
        });
        mensaje = `Tenga en cuenta que la CPC monto: ${tmpcobro.monto} fué cobrada en la Vuelta ${serviciobus.pertCatvVue.vuelta}`; 
        unidads = unidads.filter( unid => unid.id === servbus.unidadId );
        services = services.filter( serv => serv.id === servbus.serviceId );
    } 
    servbus = {
        id: servbus.id,
        monto: servbus.monto,
        fecha: caja.fecha,
        efectivo: servbus.efectivo,
        banco: servbus.banco,
        cpc: servbus.cpc,
        anticipo: servbus.anticipo,
        dctoFalla: servbus.dctoFalla,
        dctoSinietro: servbus.dctoSinietro,
        dctoAutoridad: servbus.dctoAutoridad,
        cajaId: caja.id,
        unidadId: servbus.unidadId,
        serviceId: servbus.serviceId,
        operadorId: servbus.operadorId,
        mensaje: mensaje
    };

    res.render('servbuses/edit.ejs', { servbus, services, unidads, operadors, allCatvuelts, servbusVueltasIds });
 
};


//----------------COBROS-----------
// GET /cajas/:cajaId/cobros
exports.indexCobro = async (req, res, next) => {
    let findOptions = {
        where: {},
        include: []
    };

    const { caja } = req.load;

    findOptions.include.push({
        model: models.Servbus,
        as: 'pertServCob',
        include: [{
            model: models.Unidad,
            as: 'pertUniSer'
        }]
    });

    findOptions.include.push({
        model: models.Caja,
        as: 'pertCajCob',
        where: { id: caja.id }
    });

    
    const cobranza = await models.Cobroservbus.findAll(findOptions);

    console.log(JSON.stringify(cobranza));

    const cobros = cobranza.map( (cobro) => {
        
        return {
            id: cobro.id,
            monto: cobro.monto,
            codigo: cobro.pertServCob.pertUniSer.codigo,
            placa: cobro.pertServCob.pertUniSer.placa
        }
    }); 

    try {
        res.render('cobros/', { cobros, caja });
    } catch (error) {
        next(error);
    }
};
