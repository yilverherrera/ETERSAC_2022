'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Empresas', [
            {
		ruc: "20171496366",                
		razon: "Empresa de Transp. Edilberto Ramos", 
                direccion: "Lima",
                createdAt: now,
                updatedAt: now
            }
        ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Empresas', null, {});

    }
};
