'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Aplianticipos',
            'ventId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Vents",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Aplianticipos', 'ventId');
    }
};