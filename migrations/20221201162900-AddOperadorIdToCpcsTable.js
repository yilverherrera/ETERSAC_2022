'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Cpcs',
            'operadorId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Operadors",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Cpcs', 'operadorId');
    }
};