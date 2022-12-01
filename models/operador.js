const {Model} = require('sequelize');

// Definition of the Operador model:

module.exports = (sequelize, DataTypes) => {

    class Operador extends Model {}

    Operador.init({
            dni: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "DNI no puede estar vacío"}}
            },
            nombre: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}
            },
            apellido: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Apellido no puede estar vacío"}}
            },
            fechaNac: {
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        }, {
            sequelize
        }
    );

    return Operador;
};