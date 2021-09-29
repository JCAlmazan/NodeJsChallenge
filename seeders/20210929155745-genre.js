'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [{
      name: 'Adventure',
      imageUrl: 'https://adventure/img.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Fantasy',
      imageUrl: 'https://fantasy/img.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {});
  }
};
