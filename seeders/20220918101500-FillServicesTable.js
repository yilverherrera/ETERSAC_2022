'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Services', [
            {
                nombre: 'Liquidaciones',
                monto: 170,
descMont: 'Cuenta Estandar',
monto2: 160,
descMont2: 'Cuenta Domingo',
monto3: 150,
descMont3: 'Cuenta 3 Vueltas',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Cocheras',
                monto: 5,
descMont: 'Precio1',
monto2: 6,
descMont2: 'Precio2',
monto3: 6,
descMont3: 'Precio3',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Cotizaciones',
                monto: 50,
		descMont: 'Cotización Día',
			monto2: 25,
		descMont2: 'Cotización Vuelta',
monto3: 0,
descMont3: '',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                nombre: 'Salidas',
                monto: 5,
		descMont: 'Salida',
		monto2: 6,
		descMont2: 'Salida + Tarjeta',
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
