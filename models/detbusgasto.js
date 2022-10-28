const {Model} = require('sequelize');

// Definition of the Detbusgasto model:

module.exports = (sequelize, DataTypes) => {

    class Detbusgasto extends Model {}

    Detbusgasto.init({
         fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            },
            costoUni: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            cant: {
                type:DataTypes.FLOAT,
                validate: {notEmpty: {msg: "Cantidad no puede estar vacío"}}
            },
            total: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Total no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Detbusgasto;
};