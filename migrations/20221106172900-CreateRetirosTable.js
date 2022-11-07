'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Retiros',
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
                efectivoBillCien:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoBillCincuenta:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoBillVeinte:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoBillDiez:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoMonCinco:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoMonDos:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoMonUno:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoMonCenCincuenta:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoMonCenVeinte:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                efectivoMonCenDiez:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                mezclado:{
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
                fecha: {
                    type: Sequelize.DATEONLY,
                    validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
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
        return queryInterface.dropTable('Retiros');
    }
};