'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Routs',
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
                    unique: true,
                    validate: { notEmpty: { msg: "Código no debe estar vacío." } }
                },
                nombre: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: { notEmpty: { msg: "Nombre no debe estar vacío." } }
                },
                parNorte: {
                    type: Sequelize.STRING,
                },
                posNorte: {
                    type: Sequelize.STRING,
                },
                parSur: {
                    type: Sequelize.STRING,
                },
                posSur: {
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
        return queryInterface.dropTable('Routs');
    }
};