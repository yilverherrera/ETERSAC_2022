'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Empleados',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                nombres: {
                    type:Sequelize.STRING,
                    validate: {notEmpty: {msg: "Nombres no puede estar vacío"}}
                },
                fechaNac: {
                    type: Sequelize.DATEONLY,
                },
                cargo: {
                    type:Sequelize.STRING,
                },
                salarioQuincenal: {
                    type: Sequelize.DOUBLE,
                    validate: {notEmpty: {msg: "Salario no puede estar vacío"}}  
                },
                isSalarioSemanal:{
                    type:Sequelize.BOOLEAN,
                    defaultValue: false,
                },
                isActive:{
                    type:Sequelize.BOOLEAN,
                    defaultValue: false,
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
        return queryInterface.dropTable('Empleados');
    }
};