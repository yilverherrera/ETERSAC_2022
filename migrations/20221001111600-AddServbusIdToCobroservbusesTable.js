'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Cobroservbuses',
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
        return queryInterface.removeColumn('Cobroservbuses', 'servbusId');
    }
};