const {Model} = require('sequelize');

// Definition of the Admgasto model:

module.exports = (sequelize, DataTypes) => {

    class Admgasto extends Model {}

    Admgasto.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
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

    return Admgasto;
};