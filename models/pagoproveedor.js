const {Model} = require('sequelize');

// Definition of the Pagoproveedor model:

module.exports = (sequelize, DataTypes) => {

    class Pagoproveedor extends Model {}

    Pagoproveedor.init({
        efectivo: {
            type:DataTypes.DOUBLE,
            defaultValue: 0,
        },
        banco: {
            type:DataTypes.DOUBLE,
            defaultValue: 0,
        },
        fueradCaja: {
            type:DataTypes.DOUBLE,
            defaultValue: 0,
        },
        dollar:{
            type:DataTypes.DOUBLE,
            defaultValue: 0,
        },
        tasa:{
            type:DataTypes.DOUBLE,
            defaultValue: 0,
        },
        observaciones: {
            type:DataTypes.STRING,
        },
        fecha: {
            type: DataTypes.DATEONLY,
            validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
        },
        estatus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        sequelize
    }
    );

    return Pagoproveedor;
};