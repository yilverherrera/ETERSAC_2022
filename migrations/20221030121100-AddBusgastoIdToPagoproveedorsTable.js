module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Pagoproveedors',
            'busgastoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Busgastos",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Pagoproveedors', 'busgastoId');
    }
};