'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Vuelts',
            'servbusId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Servbuses",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Vuelts', 'servbusId');
    }
};