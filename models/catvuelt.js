const {Model} = require('sequelize');

// Definition of the Catvuelt model:

module.exports = (sequelize, DataTypes) => {

    class Catvuelt extends Model {}

    Catvuelt.init({
            vuelta: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Vuelta no puede estar vacío"}}
            },
            valor: {
                type: DataTypes.FLOAT,
                validate: {notEmpty: {msg: "Valor no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Catvuelt;
};