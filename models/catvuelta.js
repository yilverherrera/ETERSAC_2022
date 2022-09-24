const {Model} = require('sequelize');

// Definition of the Catvuelta model:

module.exports = (sequelize, DataTypes) => {

    class Catvuelta extends Model {}

    Catvuelta.init({
            vuelta: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Vuelta no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Catvuelta;
};