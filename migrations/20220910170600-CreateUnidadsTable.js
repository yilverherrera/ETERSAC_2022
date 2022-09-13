'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Unidads',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                codigo: {
                    type: Sequelize.STRING,
                    validate: { notEmpty: { msg: "Código no debe estar vacío." } }
                },
                placa: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: { notEmpty: { msg: "Placa no debe estar vacía." } }
                },
                marca: {
                    type: Sequelize.STRING,
                },
                modelo: {
                    type: Sequelize.STRING,
                },
                ano: {
                    type: Sequelize.STRING,
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
        return queryInterface.dropTable('Unidads');
    }
};