'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Services',
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
                monto: {
                    type: Sequelize.DOUBLE,
                    validate: { notEmpty: { msg: "Monto no debe estar vacío." } }
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
        return queryInterface.dropTable('Services');
    }
};