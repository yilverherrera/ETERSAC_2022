'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Detbusgastos',
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
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            },
            costoUni: {
                type:Sequelize.DOUBLE,
                validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
            },
            cant: {
                type:Sequelize.FLOAT,
                validate: {notEmpty: {msg: "Cantidad no puede estar vacío"}}
            },
            total: {
                type:Sequelize.DOUBLE,
                validate: {notEmpty: {msg: "Total no puede estar vacío"}}
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
        return queryInterface.dropTable('Detbusgastos');
    }
};