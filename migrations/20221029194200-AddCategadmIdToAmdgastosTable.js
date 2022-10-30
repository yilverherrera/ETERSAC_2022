module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Admgastos',
            'categadmId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Categadms",
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Admgastos', 'categadmId');
    }
};