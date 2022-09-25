'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Catvuelts', [
            {
                vuelta: '0.5 (Media Vuelta)',
                valor: 0.5,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '1 (Una Vuelta)',
                valor: 1,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '1.5 (Una Vuelta y Media)',
                valor: 1.5,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '2 (Dos Vueltas)',
                valor: 2,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '2.5 (Dos Vueltas y Media)',
                valor: 2.5,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '3 (Tres Vueltas)',
                valor: 3,
                createdAt: new Date(), updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Catvuelts', null, {});
    }
};