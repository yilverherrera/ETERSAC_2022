module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Pagoprespersons',
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
        return queryInterface.removeColumn('Pagoprespersons', 'nominaId');
    }
};