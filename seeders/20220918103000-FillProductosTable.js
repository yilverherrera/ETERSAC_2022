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
                nombre: 'Boletos',
                precioUltComp: 3,
                precioVta1: 5,
                precioVta2: 5,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Camisas S',
                precioUltComp: 20,
                precioVta1: 25,
                precioVta2: 25,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Camisas M',
                precioUltComp: 25,
                precioVta1: 30,
                precioVta2: 30,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Camisas L',
                precioUltComp: 30,
                precioVta1: 35,
                precioVta2: 35,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Camisas Xl',
                precioUltComp: 30,
                precioVta1: 35,
                precioVta2: 35,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Camisas XXl',
                precioUltComp: 30,
                precioVta1: 35,
                precioVta2: 35,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Camisas XXXL',
                precioUltComp: 35,
                precioVta1: 40,
                precioVta2: 40,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Casacas S',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Casacas M',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Casacas L',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Casacas XL',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Casacas XXL',
                precioUltComp: 40,
                precioVta1: 50,
                precioVta2: 50,
                igv: 0,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Casacas XXXL',
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