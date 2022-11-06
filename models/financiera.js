const {Model} = require('sequelize');

// Definition of the Financiera model:

module.exports = (sequelize, DataTypes) => {

    class Financiera extends Model {}

    Financiera.init({
            nombre: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}
            },
            telefono: {
                type: DataTypes.STRING,
            }
        }, {
            sequelize
        }
    );

    return Financiera;
};