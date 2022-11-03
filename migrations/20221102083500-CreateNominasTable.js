'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Nominas',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                diasFalta: {
                    type:Sequelize.INTEGER,
                    defaultValue: 0,
                },
                diaSalario: {
                    type: Sequelize.DOUBLE,
                    validate: {notEmpty: {msg: "diaSalario no puede estar vacío"}}
                },
                montoFalta: {
                    type:Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                diasFaltaDescripcion: {
                    type: Sequelize.STRING,
                    defaultValue: "",
                },
                bono:{
                    type:Sequelize.DOUBLE,
                    defaultValue:0,
                },
                dctoPrestamoIds:{
                    type:Sequelize.STRING,
                    defaultValue: "",
                },
                dctoPrestamoTotal:{
                    type:Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                totalPago:{
                    type:Sequelize.DOUBLE,
                    validate:{notEmpty:{msg: "Total no puede estar vacío"}},
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
        return queryInterface.dropTable('Nominas');
    }
};