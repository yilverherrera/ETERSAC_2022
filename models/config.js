const {Model} = require('sequelize');

// Definition of the Config model:

module.exports = (sequelize, DataTypes) => {

    class Config extends Model {}

    Config.init({
            monto: {
                type: DataTypes.INTEGER,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            detalle: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            vuelta: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            catItem: {
                type: DataTypes.INTEGER,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Config;
};