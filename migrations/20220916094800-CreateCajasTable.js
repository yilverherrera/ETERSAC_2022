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
                    type: Sequelize.INTEGER,
                    default: 0
                },
                busInCpc: {
                    type: Sequelize.INTEGER,
                    default: 0
                },
                busInBan: {
                    type: Sequelize.INTEGER,
                    default: 0
                },  
                busInAnt: {
                    type: Sequelize.INTEGER,
                    default: 0
                },  
                vtaInEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                },                      
                vtaInCpc: {
                    type: Sequelize.INTEGER,
                    default: 0
                },  
                vtaInCon: {
                    type: Sequelize.INTEGER,
                    default: 0
                },   
                vtaInBan: {
                    type: Sequelize.INTEGER,
                    default: 0
                },    
                vtaInAnt: {
                    type: Sequelize.INTEGER,
                    default: 0
                }, 
                //EGRESOS 
                
                busEgEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                },     
                busEgBan: {
                    type: Sequelize.INTEGER,
                    default: 0
                },     
                gasAdmEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                },           
                busCpp: {
                    type: Sequelize.INTEGER,
                    default: 0
                },           
                gasPpSal: {
                    type: Sequelize.INTEGER,
                    default: 0
                },      
                impIgv: {
                    type: Sequelize.INTEGER,
                    default: 0
                },           
                vtaEgCon: {
                    type: Sequelize.INTEGER,
                    default: 0
                }, 
                gasPpCom: {
                    type: Sequelize.INTEGER,
                    default: 0
                },
                //NETO
                neto: {
                    type: Sequelize.INTEGER,
                    default: 0
                },  
                //PAGOS
                pagCppEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                }, 
                pagSalEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                },   
                cpcPresEfec: {
                    type: Sequelize.INTEGER,
                    default: 0
                }, 
                antTerEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                }, 
                antVtaEfec: {
                    type: Sequelize.INTEGER,
                    default: 0
                }, 
                devTerEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                },  
                pagPresEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                },  
                retEfe: {
                    type: Sequelize.INTEGER,
                    default: 0
                },
                salIni: {
                    type: Sequelize.INTEGER,
                    default: 0
                },          
                fecha: {
                    type: Sequelize.DATE,
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