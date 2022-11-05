const {Model} = require('sequelize');

// Definition of the Pagonomina model:

module.exports = (sequelize, DataTypes) => {

    class Pagonomina extends Model {}

    Pagonomina.init({
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

    return Pagonomina;
};