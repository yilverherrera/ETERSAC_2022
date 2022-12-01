'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Servbuses',
            'unidadId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Unidads",
                    key: "id"
                },
                onUpdate: 'NO ACTION',
                onDelete: 'NO ACTION'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Servbuses', 'unidadId');
    }
};