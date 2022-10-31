'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Pagoproveedors',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                efectivo: {
                    type:Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                banco: {
                    type:Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                fueradCaja: {
                    type:Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                observaciones: {
                    type:Sequelize.STRING,
                },
                fecha: {
                    type: Sequelize.DATEONLY,
                    validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
                },
                estatus: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
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
        return queryInterface.dropTable('Pagoproveedors');
    }
};