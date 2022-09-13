const {Model} = require('sequelize');

// Definition of the Rout model:

module.exports = (sequelize, DataTypes) => {

    class Rout extends Model {}

    Rout.init({
            codigo: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Código no puede estar vacío"}}
            },
            nombre: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Nombre no puede estar vacía"}}
            },
            parNorte: {
                type: DataTypes.STRING,
            },
            posNorte: {
                type: DataTypes.STRING,
            },
            parSur: {
                type: DataTypes.STRING,
            },
            posSur: {
                type: DataTypes.STRING,
            }
        }, {
            sequelize
        }
    );

    return Rout;
};