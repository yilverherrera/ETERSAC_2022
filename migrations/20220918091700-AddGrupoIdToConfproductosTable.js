'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Confproductos',
            'grupoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Grupos",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Confproductos', 'grupoId');
    }
};