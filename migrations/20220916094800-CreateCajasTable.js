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
                    default: 0
                },
                busInCpc: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },
                busInBan: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },  
                busInAnt: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },  
                vtaInEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },                      
                vtaInCpc: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },  
                vtaInCon: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },   
                vtaInBan: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },    
                vtaInAnt: {
                    type: Sequelize.DOUBLE,
                    default: 0
                }, 
                //EGRESOS 
                
                busEgEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },     
                busEgBan: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },     
                gasAdmEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },           
                busCpp: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },           
                gasPpSal: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },      
                impIgv: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },           
                vtaEgCon: {
                    type: Sequelize.DOUBLE,
                    default: 0
                }, 
                gasPpCom: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },
                //NETO
                neto: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },  
                //PAGOS
                pagCppEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                }, 
                pagSalEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },   
                cpcPresEfec: {
                    type: Sequelize.DOUBLE,
                    default: 0
                }, 
                antTerEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                }, 
                antVtaEfec: {
                    type: Sequelize.DOUBLE,
                    default: 0
                }, 
                devTerEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },  
                pagPresEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },  
                retEfe: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },
                salIni: {
                    type: Sequelize.DOUBLE,
                    default: 0
                },          
                fecha: {
                    type: Sequelize.DATEONLY,
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