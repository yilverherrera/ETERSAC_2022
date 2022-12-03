const {Model} = require('sequelize');

// Definition of the Cpc model:

module.exports = (sequelize, DataTypes) => {

    class Cpc extends Model {}

    Cpc.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            fecha: {
                type: DataTypes.DATEONLY,
            },
            observaciones: {
                type:DataTypes.STRING,
            }
        }, {
            sequelize
        }
    );

    return Cpc;
};