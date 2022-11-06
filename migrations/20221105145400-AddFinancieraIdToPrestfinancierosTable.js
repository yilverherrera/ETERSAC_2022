module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Prestfinancieros',
            'financieraId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Financieras",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Prestfinancieros', 'financieraId');
    }
};