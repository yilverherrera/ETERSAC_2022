const {Model} = require('sequelize');

// Definition of the Despacho model:

module.exports = (sequelize, DataTypes) => {

    class Despacho extends Model {}

    Despacho.init({
            name: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}           
            },
            color: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Color no puede estar vacío"}}           
            }
        }, {
            sequelize
        }
    );

    return Despacho;
};