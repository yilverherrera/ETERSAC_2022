const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getPrestamoPersons = require('../data/getPrestamoPersons');


// Autoload el nomina asociado a :nominaId
exports.load = async (req, res, next, nominaId) => {
    try {
        const nomina = await models.Nomina.findByPk(nominaId);
        if (nomina) {
            req.load = {...req.load, nomina};
            next();
        } else {
            throw new Error('There is no anticipo with id=' + nominaId);
        }
    } catch (error) {
        next(error);
    }
};


// GET /nominas
exports.index = async (req, res, next) => {

    try {
     

        const nominas = await models.Nomina.findAll();

        res.render('nominas/index.ejs', {nominas});
    } catch (error) {
        next(error);
    }

};

// GET /nominas/new
exports.new = async (req, res, next) => {

    const quincenas = await models.Quincena.findAll({
    	where:{
    		isCreate:{
    			[Op.eq]: false,
    		}
    	},
    	order: [['id','DESC']]
    });
    const empleados = await models.Empleado.findAll({
    	where:{
    		isActive:{
    			[Op.eq]: true,
    		}
    	}
    });

    const nomina = {
    	quincenaId: 0,
    	empleadoId: 0
    }


    res.render('nominas/new', { nomina, quincenas, empleados});

};



// POST /nominas/create
exports.create = async (req, res, next) => {

    const nomina = req.body;
    
    const quincena = nomina.quincenaId;
    const empleados = nomina.empleadoId;
    console.log(JSON.stringify(empleados));
    empleados.forEach( async(emp) => {
    const cuotaTotal = await getPrestamoPersons(emp);
    console.log(JSON.stringify(cuotaTotal));
	});

    res.json({message: 'ok'});
   
    
};




// DELETE /anticipos/:anticipoId
exports.destroy = async (req, res, next) => {

    try {
        await req.load.anticipo.destroy();
        req.flash('success', 'Anticipo Eliminada Exitosamente.');
        res.redirect("/cajas/" + caja.id + "/anticipos");
    } catch (error) {
        next(error);
    }
};


