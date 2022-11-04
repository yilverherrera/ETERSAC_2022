module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Pagoprespersonas',
            'prestamopersonaId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Prestamopersonas",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Pagoprespersonas', 'prestamopersonaId');
    }
};