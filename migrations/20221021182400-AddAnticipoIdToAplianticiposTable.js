'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Aplianticipos',
            'anticipoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Anticipos",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Aplianticipos', 'anticipoId');
    }
};