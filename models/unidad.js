const { Model } = require('sequelize');

// Definition of the Unidad model:

module.exports = (sequelize, DataTypes) => {

    class Unidad extends Model { }

    Unidad.init({
        codigo: {
            type: DataTypes.STRING,
            validate: { notEmpty: { msg: "Código no puede estar vacío" } }
        },
        placa: {
            type: DataTypes.STRING,
            unique: true,
            validate: { notEmpty: { msg: "Placa no puede estar vacía" } }
        },
        marca: {
            type: DataTypes.STRING,
        },
        modelo: {
            type: DataTypes.STRING,
        },
        ano: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize
    }
    );

    return Unidad;
};