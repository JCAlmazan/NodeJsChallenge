'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('characterMovies', [{
      characterId: '1',
      movieId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      characterId: '1',
      movieId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      characterId: '2',
      movieId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('characterMovies', null, {});
  }
};
