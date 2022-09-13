'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Unidads',
            'propietarioId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Propietarios",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Unidads', 'propietarioId');
    }
};