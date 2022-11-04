const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;


// POST /faltas/create
exports.create = async (req, res, next) => {

    const falta = req.body;
    let {nomina} = req.load;

    try{

     const fechaFaltas = nomina.diasFaltaDescripcion.split('T');
     
     const existe = fechaFaltas.includes(falta.fecha) ? true : false;
    
     if (existe === false){

     const diaSalario = nomina.diaSalario;
     let diasFalta = nomina.diasFalta;
     let totalPago = nomina.totalPago;
     let montoFalta = nomina.montoFalta;

     totalPago = totalPago - diaSalario;
     diasFalta = diasFalta + 1;
     diasFaltaDescripcion = falta.fecha;
     montoFalta = montoFalta + diaSalario;

     if (diasFalta>1) { diasFaltaDescripcion = nomina.diasFaltaDescripcion+'T'+diasFaltaDescripcion; }

     nomina.diasFalta = diasFalta;
     nomina.montoFalta = montoFalta;
     nomina.diasFaltaDescripcion = diasFaltaDescripcion;
     nomina.totalPago = totalPago;


     await nomina.save({
        fields:[
        "diasFalta",
        "montoFalta",
        "diasFaltaDescripcion",
        "totalPago",
        ],
     });

    res.json({ message:'Falta creada Exitosamente.', refresh: `nominas` });
} else {
    res.json({message:'Errror esta fecha ya ha sido agregada antes', refresh: 'nominas' })
}
}catch(error){
    if (error instanceof Sequelize.ValidationError){
        res.json({message: "Error, no se pudo crear la nómina"});
    }else{
          next(error)
    }

}

    
   
    
};




