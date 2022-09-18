'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Services', [
            {
                nombre: 'liquidación',
                monto: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'cochera',
                monto: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'cotización',
                monto: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'salida',
                monto: 0,
                createdAt: new Date(), updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Services', null, {});
    }
};