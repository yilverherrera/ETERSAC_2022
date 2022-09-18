const {Model} = require('sequelize');

// Definition of the Config model:

module.exports = (sequelize, DataTypes) => {

    class Confproducto extends Model {}

    Confproducto.init({
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
            }
        }, {
            sequelize
        }
    );

    return Confproducto;
};