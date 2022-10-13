'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Services',
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
                    validate: { notEmpty: { msg: "Nombre no debe estar vacío." } }
                },
                monto: {
                    type: Sequelize.DOUBLE,
                    validate: { notEmpty: { msg: "Monto no debe estar vacío." } }
                },
descMont: {
                type: Sequelize.STRING,
                validate: {notEmpty: {msg: "Descripción de Monto no puede estar vacío"}}
            },
 monto2: {
                    type: Sequelize.DOUBLE,
                    validate: { notEmpty: { msg: "Monto2 no debe estar vacío." } }
                },
descMont2: {
                type: Sequelize.STRING,
                validate: {notEmpty: {msg: "Descripción de Monto2 no puede estar vacío"}}
            },
 monto3: {
                    type: Sequelize.DOUBLE,
                    validate: { notEmpty: { msg: "Monto3 no debe estar vacío." } }
                },
descMont3: {
                type: Sequelize.STRING,
                validate: {notEmpty: {msg: "Descripción de Monto3 no puede estar vacío"}}
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
        return queryInterface.dropTable('Services');
    }
};
