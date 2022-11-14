'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Anticipos',
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
                    validate: { notEmpty: { msg: "Monto no debe estar vacío." } }
                },
                fecha: {
                    type: Sequelize.DATEONLY,
                    validate: { notEmpty: { msg: "Fecha no debe estar vacío." } }
                },
                fechaCaja: {
                    type: Sequelize.DATEONLY,
                    validate: { notEmpty: { msg: "Fecha no debe estar vacío." } }
                },
               saldo: {
                    type: Sequelize.DOUBLE,
                    validate: { notEmpty: { msg: "Saldo no debe estar vacío." } }
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
        return queryInterface.dropTable('Anticipos');
    }
};