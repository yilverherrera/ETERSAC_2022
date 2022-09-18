const {Model} = require('sequelize');

// Definition of the Empresa model:

module.exports = (sequelize, DataTypes) => {

    class Service extends Model {}

    Service.init({
            nombre: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}
            },
            monto: {
                type: DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            }
        }, {
            sequelize
        }
    );

    return Service;
};