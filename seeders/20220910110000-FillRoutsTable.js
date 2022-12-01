'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Routs', [
            {
		codigo: "1801",                
		nombre: "Etersac 1801", 
                parNorte: "Profam",
		posNorte: "",
		parSur: "Palmas",
		posSur: "",
                createdAt: now,
                updatedAt: now
            },
              {
        codigo: "8612",                
        nombre: "Etersac 8612", 
                parNorte: "Surquillo",
        posNorte: "",
        parSur: "Poblado Edilberto Ramos",
        posSur: "",
                createdAt: now,
                updatedAt: now
            },
              {
        codigo: "8110",                
        nombre: "Roluesa 8110", 
                parNorte: "Profam",
        posNorte: "",
        parSur: "Palmas",
        posSur: "",
                createdAt: now,
                updatedAt: now
            },
              {
        codigo: "8212",                
        nombre: "Real Star 8212", 
                parNorte: "Olivos",
        posNorte: "",
        parSur: "Palmas",
        posSur: "",
                createdAt: now,
                updatedAt: now
            },
              {
        codigo: "OTROS",                
        nombre: "OTROS 1801", 
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
