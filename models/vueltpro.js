const {Model} = require('sequelize');

// Definition of the Vueltpro model:

module.exports = (sequelize, DataTypes) => {

    class Vueltpro extends Model {}

    Vueltpro.init({
            fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            },
            vltCanceladas: {
                type: DataTypes.FLOAT
            },
            montoUnitario: {
                type: DataTypes.FLOAT
            }
        }, {
            sequelize
        }
    );

    return Vueltpro;
};