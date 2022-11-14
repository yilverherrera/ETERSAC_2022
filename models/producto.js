const {Model} = require('sequelize');

// Definition of the Empresa model:

module.exports = (sequelize, DataTypes) => {

    class Producto extends Model {}

    Producto.init({
            nombre: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}
            },
            precioUltComp: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            precioVta1: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            precioVta2: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            igv: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            vuelta:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        }, {
            sequelize
        }
    );

    return Producto;
};