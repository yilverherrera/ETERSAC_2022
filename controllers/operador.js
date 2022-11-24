const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /operadors
exports.show = async (req, res, next) => {
	
	
	const operadors = await models.Operador.findAll();

	res.json(operadors);
};


// POST operadors
exports.update = async (req, res, next) => {

	const operador = req.body;
	const id = operador.id;
	const operadorId = operador.operadorId;
	
	try{
		let vent = await models.Vent.findByPk(id);

		vent.operadorId = operadorId;

		await vent.save({
			fields:[
				"operadorId",
				],
		});

		
		res.json({ message:'Operador Modificado Exitosamente en Venta.', refresh: `` });

	}catch(error){
		if (error instanceof Sequelize.ValidationError){
			res.json({message: "Error, no se pudo modificar el operador"});
		}else{
			next(error)
		}

	}

	
	
	
};


