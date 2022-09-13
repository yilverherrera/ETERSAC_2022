const { Model } = require('sequelize');

// Definition of the Unidad model:

module.exports = (sequelize, DataTypes) => {

    class Propietario extends Model { }

    Propietario.init({
        nombre: {
            type: DataTypes.STRING,
            validate: { notEmpty: { msg: "Nombre no puede estar vacío" } }
        },
        telefono: {
            type: DataTypes.STRING,
        },
        ruc: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize
    }
    );

    return Propietario;
};