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
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'boleto',
                precioUltComp: 3,
                precioVta1: 5,
                precioVta2: 5,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'camisa s',
                precioUltComp: 20,
                precioVta1: 25,
                precioVta2: 25,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'camisa m',
                precioUltComp: 25,
                precioVta1: 30,
                precioVta2: 30,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'camisa l',
                precioUltComp: 30,
                precioVta1: 35,
                precioVta2: 35,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'camisa xl',
                precioUltComp: 30,
                precioVta1: 35,
                precioVta2: 35,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'camisa xxl',
                precioUltComp: 30,
                precioVta1: 35,
                precioVta2: 35,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'camisa xxxl',
                precioUltComp: 35,
                precioVta1: 40,
                precioVta2: 40,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'casaca s',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'casaca m',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'casaca l',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'casaca xl',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'casaca xxl',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'casaca xxxl',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Productos', null, {});
    }
};