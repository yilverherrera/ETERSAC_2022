'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Vuelts',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                fecha: {
                    type: Sequelize.DATEONLY,
                    validate: { notEmpty: { msg: "Fecha no debe estar vacío." } }
                },
                vltCanceladas: {
                    type: Sequelize.FLOAT
                },
                montoUnitario: {
                    type: Sequelize.FLOAT
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
        return queryInterface.dropTable('Vuelts');
    }
};