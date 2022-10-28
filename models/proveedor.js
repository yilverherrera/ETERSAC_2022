const {Model} = require('sequelize');

// Definition of the Proveedor model:

module.exports = (sequelize, DataTypes) => {

    class Proveedor extends Model {}

    Proveedor.init({
            nombre: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            telefono: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Proveedor;
};