'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Vuelts',
            'catvueltId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Catvuelts",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Vuelts', 'catvueltId');
    }
};