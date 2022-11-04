const {Model} = require('sequelize');

// Definition of the Pagoprespersona model:

module.exports = (sequelize, DataTypes) => {

    class Pagoprespersona extends Model {}

    Pagoprespersona.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            fecha: {
                type: DataTypes.DATEONLY,
                
            }
        }, {
            sequelize
        }
    );

    return Pagoprespersona;
};