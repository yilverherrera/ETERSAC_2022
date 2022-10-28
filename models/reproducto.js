const {Model} = require('sequelize');

// Definition of the Reproducto model:

module.exports = (sequelize, DataTypes) => {

    class Reproducto extends Model {}

    Reproducto.init({
            nombre: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}
            },
            unidad: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Unidad no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Reproducto;
};