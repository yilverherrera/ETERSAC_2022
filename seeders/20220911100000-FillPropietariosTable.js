'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Propietarios', [
            {
                nombre: "Edilberto Ramos",
                telefono: "938665110",
                ruc: "20171496366",
                createdAt: now,
                updatedAt: now
            },
           {
                nombre: "Juana",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {  
                nombre: "Juan",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Espinoza",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Guty",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {  
                nombre: "Amalin",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {  
                nombre: "Huanca",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {  
                nombre: "Riveras",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {   
                nombre: "Angel",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Pineda",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Cardenas",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Arturo",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Diaz",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Flavio",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Hector",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Marleny",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Nieto",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Bustamante",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "San Genaro",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Francisco",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Jesus",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Gladys",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Pastor",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Manuel",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Rony",
                telefono: "0",
                ruc: "0",
                createdAt: now,
                updatedAt: now
            }
        ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Propietarios', null, {});

    }
};