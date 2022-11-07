module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Retiros',
            'destinoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Destinos",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Retiros', 'destinoId');
    }
};