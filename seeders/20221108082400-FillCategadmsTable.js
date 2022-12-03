'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Categadms', [
            {
        		nombre: "Pago de Serv. de Electricidad", 
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Pago de Serv. de alquiler de Local", 
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Pago de Serv. de Agua", 
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Pago de Serv. de Tel/Internet", 
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Pago de Serv. de Comedor/Refrigerio", 
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Compra de útiles de Oficina", 
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Movilidad diligencia Administrativa", 
                createdAt: now,
                updatedAt: now
            },
            {
                nombre: "Admón", 
                createdAt: now,
                updatedAt: now
            },
        ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Categadms', null, {});

    }
};
