'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Catvueltas', [
            {
                vuelta: '0.5 (Media Vuelta)',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '1 (Una Vuelta)',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '1.5 (Una Vuelta y Media)',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '2 (Dos Vueltas)',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '2.5 (Dos Vueltas y Media)',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                vuelta: '3 (Tres Vueltas)',
                createdAt: new Date(), updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Catvueltas', null, {});
    }
};