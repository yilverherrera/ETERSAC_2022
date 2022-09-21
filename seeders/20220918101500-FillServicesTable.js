'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Services', [
            {
                nombre: 'liquidación',
                monto: 170,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'cochera',
                monto: 5,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'cotización',
                monto: 50,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'salida',
                monto: 5,
                createdAt: new Date(), updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Services', null, {});
    }
};