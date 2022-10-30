const {Model} = require('sequelize');

// Definition of the Categadm model:

module.exports = (sequelize, DataTypes) => {

    class Categadm extends Model {}

    Categadm.init({
            nombre: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Categadm;
};