'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Cobrocpcs',
            'cajaId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Cajas",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Cobrocpcs', 'cajaId');
    }
};