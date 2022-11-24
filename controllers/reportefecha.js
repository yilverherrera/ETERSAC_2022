const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;




// POST operadors
exports.update = async (req, res, next) => {

	const fechaMod = req.body;
	const id = fechaMod.id;
	const fecha = fechaMod.fecha;
	
	try{
		let servbus = await models.Servbus.findByPk(id);

		servbus.fecha = fecha;

		await servbus.save({
			fields:[
				"fecha",
				],
		});

		
		res.json({ message:'Fecha Modificada Exitosamente en Servicio.', refresh: `` });

	}catch(error){
		if (error instanceof Sequelize.ValidationError){
			res.json({message: "Error, no se pudo modificar la fecha"});
		}else{
			next(error)
		}

	}

	
	
	
};


