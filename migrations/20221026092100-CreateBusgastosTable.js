'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Busgastos',
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
            doc: {
                type:Sequelize.STRING,
                validate: {notEmpty: {msg: "Doc no puede estar vacío"}}
            },
            fecha: {
                type: Sequelize.DATEONLY,
                validate: {notEmpty: {msg: "Fecha no puede estar vacío"}}
            },
            tipoPago: {
                type: Sequelize.STRING,
                validate: {notEmpty: {msg: "Tipo de pago no puede estar vacío"}}
            },
            moneda:{
                type: Sequelize.INTEGER,
                validate: {notEmpty:{msg: "Moneda no puede estar vacía"}},
            },
            abonado: {
                type:Sequelize.DOUBLE,
                validate: {notEmpty: {msg: "Abonado no puede estar vacío"}}
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
        return queryInterface.dropTable('Busgastos');
    }
};