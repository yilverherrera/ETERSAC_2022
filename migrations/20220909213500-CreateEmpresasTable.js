'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Empresas',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                ruc: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: { notEmpty: { msg: "Ruc no debe estar vacío." } }
                },
                razon: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: { notEmpty: { msg: "Razón no debe estar vacío." } }
                },
                direccion: {
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
        return queryInterface.dropTable('Empresas');
    }
};