const {Model} = require('sequelize');

// Definition of the Caja model:
module.exports = (sequelize, DataTypes) => {

    class Caja extends Model {}

    Caja.init({
        //INGRESOS
            busInEfe: {
                type: DataTypes.INTEGER,
                default: 0
            },
            busInCpc: {
                type: DataTypes.INTEGER,
                default: 0
            },
            busInBan: {
                type: DataTypes.INTEGER,
                default: 0
            },  
            busInAnt: {
                type: DataTypes.INTEGER,
                default: 0
            },  
            vtaInEfe: {
                type: DataTypes.INTEGER,
                default: 0
            },                      
            vtaInCpc: {
                type: DataTypes.INTEGER,
                default: 0
            },  
            vtaInCon: {
                type: DataTypes.INTEGER,
                default: 0
            },   
            vtaInBan: {
                type: DataTypes.INTEGER,
                default: 0
            },    
            vtaInAnt: {
                type: DataTypes.INTEGER,
                default: 0
            }, 
            //EGRESOS 
            
            busEgEfe: {
                type: DataTypes.INTEGER,
                default: 0
            },     
            busEgBan: {
                type: DataTypes.INTEGER,
                default: 0
            },     
            gasAdmEfe: {
                type: DataTypes.INTEGER,
                default: 0
            },           
            busCpp: {
                type: DataTypes.INTEGER,
                default: 0
            },           
            gasPpSal: {
                type: DataTypes.INTEGER,
                default: 0
            },      
            impIgv: {
                type: DataTypes.INTEGER,
                default: 0
            },           
            vtaEgCon: {
                type: DataTypes.INTEGER,
                default: 0
            }, 
            gasPpCom: {
                type: DataTypes.INTEGER,
                default: 0
            },
            //NETO
            neto: {
                type: DataTypes.INTEGER,
                default: 0
            },  
            //PAGOS
            pagCppEfe: {
                type: DataTypes.INTEGER,
                default: 0
            }, 
            pagSalEfe: {
                type: DataTypes.INTEGER,
                default: 0
            },   
            cpcPresEfec: {
                type: DataTypes.INTEGER,
                default: 0
            }, 
            antTerEfe: {
                type: DataTypes.INTEGER,
                default: 0
            }, 
            antVtaEfec: {
                type: DataTypes.INTEGER,
                default: 0
            }, 
            devTerEfe: {
                type: DataTypes.INTEGER,
                default: 0
            },  
            pagPresEfe: {
                type: DataTypes.INTEGER,
                default: 0
            }, 
            salIni: {
                type: DataTypes.INTEGER,
                default: 0
            },   
            retEfe: {
                type: DataTypes.INTEGER,
                default: 0
            },            
            fecha: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize
        }
    );

    return Caja;
};