const {Model} = require('sequelize');

// Definition of the Empresa model:

module.exports = (sequelize, DataTypes) => {

    class Empresa extends Model {}

    Empresa.init({
            ruc: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Ruc no puede estar vacío"}}
            },
            razon: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Razón no puede estar vacía"}}
            },
            direccion: {
                type: DataTypes.STRING,
            }
        }, {
            sequelize
        }
    );

    return Empresa;
};