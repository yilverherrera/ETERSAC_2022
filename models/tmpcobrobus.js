const {Model} = require('sequelize');

// Definition of the Tmpcobrobus model:

module.exports = (sequelize, DataTypes) => {

    class Tmpcobrobus extends Model {}

    Tmpcobrobus.init({
            monto: {
            type: DataTypes.DOUBLE,
            validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            fecha: {
                type: DataTypes.DATE,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Tmpcobrobus;
};