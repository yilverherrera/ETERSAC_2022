'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Configs',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                monto: {
                    type: Sequelize.INTEGER,
                    validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
                },
                detalle: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                vuelta: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                catItem: {
                    type: Sequelize.INTEGER,
                    validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
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
        return queryInterface.dropTable('Configs');
    }
};