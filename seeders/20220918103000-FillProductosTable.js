'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Productos', [
            {
                nombre: 'DB5 Diesel',
                precioUltComp: 15.30,
                precioVta1: 17.99,
                precioVta2: 17.99,
                igv: 0,
                vuelta: true,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Boletos',
                precioUltComp: 3,
                precioVta1: 5,
                precioVta2: 5,
                igv: 0,
                vuelta: false,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Tarjetas',
                precioUltComp: 3,
                precioVta1: 5,
                precioVta2: 5,
                igv: 0,
                vuelta: false,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Camisas',
                precioUltComp: 20,
                precioVta1: 25,
                precioVta2: 25,
                igv: 0,
                vuelta: false,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Casacas',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                vuelta: false,
                createdAt: new Date(), updatedAt: new Date()
            },
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Productos', null, {});
    }
};