const {Model} = require('sequelize');

// Definition of the Venta model:
module.exports = (sequelize, DataTypes) => {

    class Vent extends Model {}

    Vent.init({
        precioCompra: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        precioVta: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        fecha: {
            type: DataTypes.DATEONLY,
            defaultValue: 0
        },
        cant: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        monto: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        efectivo: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        }, 
        banco: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },  
        cpc: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },                      
        anticipo: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },  
        dctoFalla: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },   
        dctoSinietro: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },    
        dctoAutoridad: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        estatus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        sequelize
    }
    );

    return Vent;
};