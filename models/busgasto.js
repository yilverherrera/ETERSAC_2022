const {Model} = require('sequelize');

// Definition of the Busgasto model:

module.exports = (sequelize, DataTypes) => {

    class Busgasto extends Model {}

    Busgasto.init({
            monto: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            doc: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Doc no puede estar vacío"}}
            },
            fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            },
            tipoPago: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Tipo de pago no puede estar vacío"}}
            },
            abonado: {
                type:DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Abonado no puede estar vacío"}}
            },
            estatus: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        }, {
            sequelize
        }
    );

    return Busgasto;
};