const {Model} = require('sequelize');

// Definition of the Caja model:
module.exports = (sequelize, DataTypes) => {

    class Caja extends Model {}

    Caja.init({
        //INGRESOS
            busInEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            busInCpc: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            busInBan: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },  
            busInAnt: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },  
            vtaInEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },                      
            vtaInCpc: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },  
            vtaInCon: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },   
            vtaInBan: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },    
            vtaInAnt: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            //EGRESOS 
            
            busEgEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },     
            busEgBan: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },     
            gasAdmEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },           
            busCpp: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },           
            gasPpSal: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },      
            impIgv: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },           
            vtaEgCon: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            gasPpCom: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
            //NETO
            neto: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },  
            //PAGOS
            pagCppEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            pagSalEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },   
            cpcPresEfec: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            antTerEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            antVtaEfec: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            devTerEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },  
            pagPresEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            }, 
            salIni: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },   
            retEfe: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },            
            fecha: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            cierre: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        }, {
            sequelize
        }
    );

    return Caja;
};