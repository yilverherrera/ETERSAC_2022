const {Model} = require('sequelize');

// Definition of the Destino model:

module.exports = (sequelize, DataTypes) => {

    class Destino extends Model {}

    Destino.init({
            destino: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Destino no puede estar vacío"}}
            },
        }, {
            sequelize
        }
    );

    return Destino;
};