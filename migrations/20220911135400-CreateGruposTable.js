'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Grupos',
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
                    validate: { notEmpty: { msg: "Nombre no puede estar vacío" } }
                },
                descripcion: {
                    type: Sequelize.STRING,
                    validate: { notEmpty: { msg: "Descripción no puede estar vacía" } }
                },
                isEmpresa: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                showCaja: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                showAutAdm: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                allRuta: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
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
        return queryInterface.dropTable('Grupos');
    }
};