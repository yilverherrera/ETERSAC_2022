'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Routs', [
            {
		codigo: "1801",                
		nombre: "Etersac1801", 
                parNorte: "Profam",
		posNorte: "",
		parSur: "Palmas",
		posSur: "",
                createdAt: now,
                updatedAt: now
            }
        ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Routs', null, {});

    }
};
