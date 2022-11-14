const {Model} = require('sequelize');

// Definition of the Cobroservbus model:

module.exports = (sequelize, DataTypes) => {

    class Cobroservbus extends Model {}

    Cobroservbus.init({
            monto: {
            type: DataTypes.DOUBLE,
            validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Cobroservbus;
};