'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Cobrovents',
            'ventId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "vents",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Cobrovents', 'ventId');
    }
};