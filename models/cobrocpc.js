const {Model} = require('sequelize');

// Definition of the Cobrocpc model:

module.exports = (sequelize, DataTypes) => {

    class Cobrocpc extends Model {}

    Cobrocpc.init({
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

    return Cobrocpc;
};