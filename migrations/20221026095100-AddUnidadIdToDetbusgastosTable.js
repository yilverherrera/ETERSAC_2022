module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Detbusgastos',
            'unidadId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Unidads",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Detbusgastos', 'unidadId');
    }
};