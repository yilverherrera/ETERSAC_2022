'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Services', [
            {
                nombre: 'Liquidaciones',
                monto: 170,
descMont: 'std',
monto2: 160,
descMont2: 'Domingo',
monto3: 150,
descMont3: '3 Vltas',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Cocheras',
                monto: 5,
descMont: 'P1',
monto2: 6,
descMont2: 'P2',
monto3: 6,
descMont3: 'P3',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Cotizaciones',
                monto: 50,
		descMont: 'Día',
			monto2: 25,
		descMont2: 'Vlta',
monto3: 0,
descMont3: '',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Salidas',
                monto: 5,
		descMont: 'Salida',
		monto2: 6,
		descMont2: 'Sal+Tarj',
		monto3: 0,
		descMont3: '',
                createdAt: new Date(), updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Services', null, {});
    }
};
