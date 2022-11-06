const {Model} = require('sequelize');

// Definition of the Prestfinanciero model:

module.exports = (sequelize, DataTypes) => {

    class Prestfinanciero extends Model {}

    Prestfinanciero.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            fecha: {
                type:DataTypes.DATEONLY,
            },
            intMensuales: {
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            moneda: {
                type:DataTypes.INTEGER,
                defaultValue: 1,
            },
            observaciones:{
                type: DataTypes.STRING,
                defaultValue: "",
            }
        }, {
            sequelize
        }
    );

    return Prestfinanciero;
};