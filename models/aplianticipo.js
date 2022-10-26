const {Model} = require('sequelize');

// Definition of the Aplianticipo model:

module.exports = (sequelize, DataTypes) => {

    class Aplianticipo extends Model {}

    Aplianticipo.init({
            monto: {
                type:DataTypes.DOUBLE,
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

    return Aplianticipo;
};