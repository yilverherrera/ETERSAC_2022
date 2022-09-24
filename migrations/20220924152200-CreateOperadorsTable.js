'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Operadors',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                dni: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: { notEmpty: { msg: "DNI no debe estar vacío." } }
                },
                nombre: {
                    type: Sequelize.STRING,
                    validate: { notEmpty: { msg: "Nombre no debe estar vacío." } }
                },
                apellido: {
                    type: Sequelize.STRING,
                    validate: { notEmpty: { msg: "Apellido no debe estar vacío." } }
                },
                fechaNac: {
                    type: Sequelize.DATEONLY,
                    allowNull: false
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
        return queryInterface.dropTable('Operadors');
    }
};