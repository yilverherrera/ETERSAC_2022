'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Cajas',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                busInEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                busInCpc: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                busInBan: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                busInAnt: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                vtaInEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },                      
                vtaInCpc: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                vtaInCon: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },   
                vtaInBan: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },    
                vtaInAnt: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                }, 
                //EGRESOS 
                
                busEgEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },     
                busEgBan: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },     
                gasAdmEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },           
                busCpp: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },           
                gasPpSal: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },      
                impIgv: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },           
                vtaEgCon: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                }, 
                gasPpCom: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                //NETO
                neto: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                //PAGOS
                pagCppEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                }, 
                pagSalEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },   
                cpcPresEfec: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                }, 
                antTerEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                }, 
                antVtaEfec: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                }, 
                devTerEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                pagPresEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                retEfe: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                salIni: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },          
                fecha: {
                    type: Sequelize.DATEONLY,
                    allowNull: false
                },
                cierre: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            {
                sync: { force: true }
            }
        );
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Cajas');
    }
};