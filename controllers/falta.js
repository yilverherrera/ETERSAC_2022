const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const getSalario = require("../data/getSalario");


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

exports.destroy = async (req, res, next)=>{
    const {nomina} = req.load;
    const falta = req.body;
    let diasFaltaDescripcionNew = "";
    const diasFalta = nomina.diasFalta - 1;
    const salario = await getSalario(nomina.empleadoId);
    const diaSalario = salario.diaSalario;
    const montoFalta = diasFalta * diaSalario;

    let diasFaltaDescripcion = nomina.diasFaltaDescripcion.split('T');

    const diasFaltDescripcion = diasFaltaDescripcion.filter((dias) => dias !== falta.fecha);

    diasFaltDescripcion.forEach((diasFalt) => diasFaltaDescripcionNew = `${diasFaltaDescripcionNew}${diasFalt}T` );

    nomina.diasFaltaDescripcion = diasFaltaDescripcionNew;
    nomina.diasFalta = diasFalta;
    nomina.montoFalta = montoFalta;
try{
    await nomina.save({
        fields:[
        "diasFalta",
        "montoFalta",
        "diasFaltaDescripcion",
        ]
    });
    res.json({message: "Falta elimada Exitosamente." , refresh: `quincenas/${nomina.quincenaId}`});
}catch(error){

     if (error instanceof Sequelize.ValidationError){
        res.json({message: "Error, no se pudo elimnar la falta"});
    }else{
          next(error)
    }
}

}




