'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Despachos', [
            {
        		name: "Palmas", 
                color: "#e6e647",
                routId: 1,
                createdAt: now,
                updatedAt: now
            },
            {
                name: "Profam", 
                color: " #4dc62f ",
                routId: 1,
                createdAt: now,
                updatedAt: now
            }
        ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Despachos', null, {});

    }
};
