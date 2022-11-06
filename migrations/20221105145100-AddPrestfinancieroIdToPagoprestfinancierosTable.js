module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Pagoprestfinancieros',
            'prestfinancieroId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Prestfinancieros",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Pagoprestfinancieros', 'prestfinancieroId');
    }
};