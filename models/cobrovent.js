const {Model} = require('sequelize');

// Definition of the Cobrovents model:

module.exports = (sequelize, DataTypes) => {

    class Cobrovent extends Model {}

    Cobrovent.init({
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

    return Cobrovent;
};