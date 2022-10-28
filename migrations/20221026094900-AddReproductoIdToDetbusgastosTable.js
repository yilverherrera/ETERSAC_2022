module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Detbusgastos',
            'reproductoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Reproductos",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Detbusgastos', 'reproductoId');
    }
};