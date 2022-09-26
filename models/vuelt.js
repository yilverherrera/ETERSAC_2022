const {Model} = require('sequelize');

// Definition of the Vuelt model:

module.exports = (sequelize, DataTypes) => {

    class Vuelt extends Model {}

    Vuelt.init({
            fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Vuelt;
};