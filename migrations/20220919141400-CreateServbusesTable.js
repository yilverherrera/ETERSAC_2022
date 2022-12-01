'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Servbuses',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                monto: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                fecha: {
                    type: Sequelize.DATEONLY,
                    validate: {notEmpty: {msg:"Fecha no puede estarVacía"}}
                },
                fechaCaja: {
                    type: Sequelize.DATEONLY,
                    validate: {notEmpty: {msg:"Fecha no puede estarVacía"}}
                },
                efectivo: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                banco: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                dollar: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                cpc: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },                      
                anticipo: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },  
                dctoFalla: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },   
                dctoSinietro: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },    
                dctoAutoridad: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                estatus: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
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
        return queryInterface.dropTable('Servbuses');
    }
};