'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Despachos',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                name: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: {notEmpty: {msg: "Nombre no puede estar vacío."}}
                },
                color: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: {notEmpty: {msg: "Color no puede estar vacío."}}
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
                sync: {force: true}
            }
        );
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Despachos');
    }
};