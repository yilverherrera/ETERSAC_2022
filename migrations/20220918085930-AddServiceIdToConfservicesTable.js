'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Confservices',
            'serviceId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Services",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Confservices', 'serviceId');
    }
};