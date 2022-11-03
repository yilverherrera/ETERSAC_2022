const {Model} = require('sequelize');

// Definition of the Nomina model:

module.exports = (sequelize, DataTypes) => {

    class Nomina extends Model {}

    Nomina.init({
            diasFalta: {
                type:DataTypes.INTEGER,
                defaultValue: 0,
            },
            diaSalario: {
                type: DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "diaSalario no puede estar vacío"}}
            },
            montoFalta: {
                type:DataTypes.DOUBLE,
                 defaultValue:0,
            },
            diasFaltaDescripcion: {
                type: DataTypes.STRING,
                 defaultValue:"",
            },
            bono:{
                type:DataTypes.DOUBLE,
                defaultValue:0,
            },
            dctoPrestamoIds:{
                type:DataTypes.STRING,
                defaultValue: "",
            },
            dctoPrestamoTotal:{
                type:DataTypes.DOUBLE,
                 defaultValue:0,
            },
            totalPago:{
                type:DataTypes.DOUBLE,
                validate:{notEmpty:{msg: "Total no puede estar vacío"}},
            }
        }, {
            sequelize
        }
    );

    return Nomina;
};