'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Servbuses',
            'operadorId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Operadors",
                    key: "id"
                },
                onUpdate: 'NO ACTION',
                onDelete: 'NO ACTION'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Servbuses', 'operadorId');
    }
};