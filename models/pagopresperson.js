const {Model} = require('sequelize');

// Definition of the Pagopresperson model:

module.exports = (sequelize, DataTypes) => {

    class Pagopresperson extends Model {}

    Pagopresperson.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            fecha: {
                type: DataTypes.DATEONLY,
                
            }
        }, {
            sequelize
        }
    );

    return Pagopresperson;
};