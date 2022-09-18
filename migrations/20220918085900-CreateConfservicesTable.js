'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Confservices',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                monto: {
                    type: Sequelize.DOUBLE,
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
        return queryInterface.dropTable('Confservices');
    }
};