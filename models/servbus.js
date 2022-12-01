const {Model} = require('sequelize');

// Definition of the Servbus model:
module.exports = (sequelize, DataTypes) => {

    class Servbus extends Model {}

    Servbus.init({
            monto: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            fecha: {
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg:"Fecha no puede estar Vacía"}}
            },
            fechaCaja:{
                type: DataTypes.DATEONLY,
                validate: {notEmpty: {msg:"Fecha no puede estar Vacía"}}
            },
            efectivo: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },  
            banco: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            dollar: {
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

    return Servbus;
};