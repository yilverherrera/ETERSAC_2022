'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Servbuses',
            'serviceId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Services",
                    key: "id"
                },
                onUpdate: 'NO ACTION',
                onDelete: 'NO ACTION'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Servbuses', 'serviceId');
    }
};