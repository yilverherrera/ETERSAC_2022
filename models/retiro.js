const {Model} = require('sequelize');

// Definition of the Retiro model:

module.exports = (sequelize, DataTypes) => {

    class Retiro extends Model {}

    Retiro.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            efectivoBillCien:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoBillCincuenta:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoBillVeinte:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoBillDiez:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoMonCinco:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoMonDos:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoMonUno:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoMonCenCincuenta:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoMonCenVeinte:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            efectivoMonCenDiez:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            mezclado:{
                type: DataTypes.DOUBLE,
                defaultValue: 0,
            },
            fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Retiro;
};