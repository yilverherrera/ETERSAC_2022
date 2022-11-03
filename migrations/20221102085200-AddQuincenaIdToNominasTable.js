module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Nominas',
            'quincenaId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Quincenas",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Nominas', 'quincenaId');
    }
};