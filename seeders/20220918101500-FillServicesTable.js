'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Services', [
        {
            
            monto: 170,
            descMont: 'std',
            monto2: 160,
            descMont2: 'Domingo',
            monto3: 150,
            descMont3: '3 Vltas',
            vuelta: true,
            asocProducto: 0,
            isUtil: true,
            nombre: 'Liquidaciones',
            createdAt: new Date(), updatedAt: new Date()
        },
        {
           
            monto: 5,
            descMont: 'P1',
            monto2: 6,
            descMont2: 'P2',
            monto3: 6,
            descMont3: 'P3',
            vuelta: false,
            asocProducto: 0,
            isUtil: true,
             nombre: 'Cocheras',
            createdAt: new Date(), updatedAt: new Date()
        },
        {
           
            monto: 50,
            descMont: 'Día',
            monto2: 25,
            descMont2: 'Vlta',
            monto3: 0,
            descMont3: '',
            vuelta: false,
            asocProducto: 0,
            isUtil: true,
             nombre: 'Cotizaciones',
            createdAt: new Date(), updatedAt: new Date()
        },
        {
            
            monto: 5,
            descMont: 'Salida',
            monto2: 6,
            descMont2: 'Sal+Tarj',
            monto3: 0,
            descMont3: '',
            vuelta: false,
            asocProducto: 3,
            isUtil: true,
            nombre: 'Salidas',
            createdAt: new Date(), updatedAt: new Date()
        },
         {
            
            monto: 267,
            descMont: 'SOAT',
            monto2: 60,
            descMont2: 'SOAT $',
            monto3: 0,
            descMont3: '',
            vuelta: false,
            asocProducto: 0,
            isUtil: false,
            nombre: 'SOAT',
            createdAt: new Date(), updatedAt: new Date()
        },
         {
            
            monto: 100,
            descMont: 'OTROS',
            monto2: 60,
            descMont2: 'OTROS',
            monto3: 0,
            descMont3: '',
            vuelta: false,
            asocProducto: 0,
            isUtil: false,
            nombre: 'OTROS',
            createdAt: new Date(), updatedAt: new Date()
        }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Services', null, {});
    }
};
