var bcrypt = require("bcryptjs");

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'example@example.com',
      password: bcrypt.hashSync('example', 8),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'jca@jca.com',
      password: bcrypt.hashSync('jca', 8),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
