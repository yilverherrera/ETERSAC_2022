'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Productos',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                nombre: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: { notEmpty: { msg: "Nombre no debe estar vacío." } }
                },
                precioUltComp: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                precioVta1: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                precioVta2: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0
                },
                igv: {
                    type: Sequelize.DOUBLE,
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
        return queryInterface.dropTable('Productos');
    }
};