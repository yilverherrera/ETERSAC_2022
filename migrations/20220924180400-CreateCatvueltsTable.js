'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Catvuelts',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                vuelta: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: { notEmpty: { msg: "Vuelta no debe estar vacío." } }
                },
                valor: {
                    type: Sequelize.FLOAT,
                    validate: { notEmpty: { msg: "Valor no debe estar vacío." } }
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
        return queryInterface.dropTable('Catvuelts');
    }
};