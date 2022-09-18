const {Model} = require('sequelize');

// Definition of the Config model:

module.exports = (sequelize, DataTypes) => {

    class Confservice extends Model {}

    Confservice.init({
            monto: {
                type: DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            detalle: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            vuelta: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }, {
            sequelize
        }
    );

    return Confservice;
};