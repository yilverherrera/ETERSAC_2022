const {Model} = require('sequelize');

// Definition of the Anticipo model:

module.exports = (sequelize, DataTypes) => {

    class Anticipo extends Model {}

    Anticipo.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            },
            saldo: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Saldo no puede estar vacío"}}
            },
            estatus: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        }, {
            sequelize
        }
    );

    return Anticipo;
};