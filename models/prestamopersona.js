const {Model} = require('sequelize');

// Definition of the Prestamopersona model:

module.exports = (sequelize, DataTypes) => {

    class Prestamopersona extends Model {}

    Prestamopersona.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            cuotaNominaQuincena: {
                type: DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Cuota no puede estar vacío"}}
            },
            cuotaCant: {
                type: DataTypes.INTEGER,
                validate: {notEmpty: {msg: "Cant no puede estar vacío"}}
            },
            fecha: {
                type:DataTypes.DATEONLY,
                 validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            },
            observaciones: {
                type: DataTypes.STRING,
                 defaultValue:"",
            }
        }, {
            sequelize
        }
    );

    return Prestamopersona;
};