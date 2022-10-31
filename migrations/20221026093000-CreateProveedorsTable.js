'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Proveedors',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
         nombre: {
                type:Sequelize.STRING,
                validate: {notEmpty: {msg: "Nombre no puede estar vacío"}}
            },
            telefono: {
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
        return queryInterface.dropTable('Proveedors');
    }
};