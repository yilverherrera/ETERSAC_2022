'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Quincenas',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                desde: {
                    type:Sequelize.DATEONLY,
                    validate: {notEmpty: {msg: "Desde no puede estar vacío"}}
                },
                hasta: {
                    type:Sequelize.DATEONLY,
                    validate: {notEmpty: {msg: "Hasta no puede estar vacío"}}
                },
                year: {
                    type:Sequelize.STRING,
                    validate: {notEmpty: {msg: "Year no puede estar vacío"}}
                },
                semana: {
                    type: Sequelize.STRING,
                },
                nSem:{
                    type:Sequelize.INTEGER,
                    defaultValue:2,
                },
                nDias:{
                    type:Sequelize.INTEGER,
                    defaultValue:13,
                },
                isCreate:{
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
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
        return queryInterface.dropTable('Quincenas');
    }
};