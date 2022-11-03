module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Prestamopersons',
            'empleadoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Empleados",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Prestamopersons', 'empleadoId');
    }
};