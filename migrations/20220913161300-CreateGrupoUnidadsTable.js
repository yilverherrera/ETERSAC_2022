'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.createTable(
            'GrupoUnidads',
            {
                unidadId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    unique: "compositeKey",
                    allowNull: false,
                    references: {
                        model: "Unidads",
                        key: "id"
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                grupoId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    unique: "compositeKey",
                    allowNull: false,
                    references: {
                        model: "Grupos",
                        key: "id"
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            {
                sync: { force: true }
            }
        );
    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('GrupoUnidads');
    }
};