const {Model} = require('sequelize');

// Definition of the Tmpcobrovta model:

module.exports = (sequelize, DataTypes) => {

    class Tmpcobrovta extends Model {}

    Tmpcobrovta.init({
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

    return Tmpcobrovta;
};