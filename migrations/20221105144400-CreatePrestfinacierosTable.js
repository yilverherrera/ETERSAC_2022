'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Prestfinancieros',
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
                fecha: {
                    type:Sequelize.DATEONLY,
                },
                intMensuales: {
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                moneda: {
                    type: Sequelize.DATEONLY,
                    defaultValue: 1,
                },
                observaciones:{
                    type: Sequelize.STRING,
                    defaultValue: "",
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
        return queryInterface.dropTable('Prestfinancieros');
    }
};