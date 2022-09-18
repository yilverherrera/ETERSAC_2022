'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.createTable(
            'DespachoUsers',
            {
                userId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    unique: "compositeKey",
                    allowNull: false,
                    references: {
                        model: "Users",
                        key: "id"
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                despachoId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    unique: "compositeKey",
                    allowNull: false,
                    references: {
                        model: "Despachos",
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
                sync: {force: true}
            }
        );
    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('DespachoUsers');
    }
};