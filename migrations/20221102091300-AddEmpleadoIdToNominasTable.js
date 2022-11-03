module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Nominas',
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
        return queryInterface.removeColumn('Nominas', 'empleadoId');
    }
};