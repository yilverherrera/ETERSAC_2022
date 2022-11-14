const {Model} = require('sequelize');

// Definition of the Service model:

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
        },
        descMont: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Descripción de Monto no puede estar vacío"}}
        },
        monto2: {
            type: DataTypes.DOUBLE,
            validate: {notEmpty: {msg: "Monto2 no puede estar vacío"}}
        },
        descMont2: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Descripción de Monto2 no puede estar vacío"}}
        },
        monto3: {
            type: DataTypes.DOUBLE,
            validate: {notEmpty: {msg: "Monto3 no puede estar vacío"}}
        },
        descMont3: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Descripción de Monto3 no puede estar vacío"}}
        },
        vuelta: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, {
        sequelize
    }
    );

    return Service;
};
