const {Model} = require('sequelize');

// Definition of the Quincena model:

module.exports = (sequelize, DataTypes) => {

    class Quincena extends Model {}

    Quincena.init({
            desde: {
                type:DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Desde no puede estar vacío"}}
            },
            hasta: {
                type:DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Hasta no puede estar vacío"}}
            },
            year: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Year no puede estar vacío"}}
            },
            semana: {
                type: DataTypes.STRING,
            },
            nSem:{
                type:DataTypes.INTEGER,
                defaultValue:2,
            },
            nDias:{
                type:DataTypes.INTEGER,
                defaultValue:13,
            },
            isCreate:{
                type:DataTypes.BOOLEAN,
                defaultValue: false,
            }
        }, {
            sequelize
        }
    );

    return Quincena;
};