'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Operadors', [
            {
                dni: '16071260',
                nombre: 'Yilver',
                apellido: 'Herrera',
                fechaNac: '1982-04-11',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                dni: '18798839',
                nombre: 'Beatriz',
                apellido: 'Morales',
                fechaNac: '1989-06-09',
                createdAt: new Date(), updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Operadors', null, {});
    }
};