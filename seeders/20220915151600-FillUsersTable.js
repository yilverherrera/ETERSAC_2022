'use strict';

var crypt = require('../helpers/crypt');


module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Users', [
            {
                username: 'admin',
                password: crypt.encryptPassword('1234', 'aaaa'),
                salt: 'aaaa',
                isAdmin: true,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'pepe',
                password: crypt.encryptPassword('5678', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'fanny',
                password: crypt.encryptPassword('fanny.*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'amalin',
                password: crypt.encryptPassword('amalin_*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'gladys',
                password: crypt.encryptPassword('gladys-*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'francesca',
                password: crypt.encryptPassword('francescaz*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'nancy',
                password: crypt.encryptPassword('nancy#*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'danny',
                password: crypt.encryptPassword('danny#*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'otro',
                password: crypt.encryptPassword('otro#*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                username: 'adriana',
                password: crypt.encryptPassword('adriana#*2022', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(), updatedAt: new Date()
            }

        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
    }
};