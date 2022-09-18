'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Confproductos',
            'productoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Productos",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Confproductos', 'productoId');
    }
};