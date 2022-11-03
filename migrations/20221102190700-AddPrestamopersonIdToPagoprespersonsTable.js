module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Pagoprespersons',
            'prestamopersonId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Prestamopersons",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Pagoprespersons', 'prestamopersonId');
    }
};