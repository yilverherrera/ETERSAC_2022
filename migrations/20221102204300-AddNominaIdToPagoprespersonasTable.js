module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Pagoprespersonas',
            'nominaId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Nominas",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Pagoprespersonas', 'nominaId');
    }
};