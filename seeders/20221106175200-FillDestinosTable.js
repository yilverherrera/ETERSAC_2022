'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Destinos', [
            {
        		destino: "Se entrega a responsable sin información de destino", 
                createdAt: now,
                updatedAt: now
            },
            {
                destino: "Monto total entregado para compra de Combustible", 
                createdAt: now,
                updatedAt: now
            },
            {
                destino: "Monto total entregado para pago de Cuota Finan. de Buses", 
                createdAt: now,
                updatedAt: now
            },
            {
                destino: "Monto total entregado para pago de Cuota SOAT", 
                createdAt: now,
                updatedAt: now
            },
            {
                destino: "Monto total entregado para pago de Cuota Finan. de Prestamos (Banco, Financiera..)", 
                createdAt: now,
                updatedAt: now
            },
            {
                destino: "Monto total entregado para depósito a cuenta de responsable", 
                createdAt: now,
                updatedAt: now
            },
            {
                destino: "Monto total entregado para depósito a cuenta de particular", 
                createdAt: now,
                updatedAt: now
            },
        ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Destinos', null, {});

    }
};
