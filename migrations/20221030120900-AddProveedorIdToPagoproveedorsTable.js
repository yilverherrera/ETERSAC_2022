module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Pagoproveedors',
            'proveedorId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Proveedors",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Pagoproveedors', 'proveedorId');
    }
};