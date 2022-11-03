'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Prestamopersons',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                monto: {
                    type:Sequelize.DOUBLE,
                    validate: {notEmpty: {msg: "Monto no puede estar vacío"}}
                },
                cuotaNominaQuincena: {
                    type: Sequelize.DOUBLE,
                    validate: {notEmpty: {msg: "Cuota no puede estar vacío"}}
                },
                cuotaCant: {
                    type: Sequelize.INTEGER,
                    validate: {notEmpty: {msg: "Cant no puede estar vacío"}}
                },
                fecha: {
                    type:Sequelize.DATEONLY,
                    validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
                },
                observaciones: {
                    type: Sequelize.STRING,
                    defaultValue:"",
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
        return queryInterface.dropTable('Prestamopersons');
    }
};