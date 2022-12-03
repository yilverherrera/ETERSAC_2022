'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Cobrocpcs',
            'cpcId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Cpcs",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Cobrocpcs', 'cpcId');
    }
};