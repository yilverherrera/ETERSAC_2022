'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Busgastos',
            'proveedorId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Proveedors",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Busgastos', 'proveedorId');
    }
};