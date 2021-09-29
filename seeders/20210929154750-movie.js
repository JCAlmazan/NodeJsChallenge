'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [{
      title: 'The_three_musketeers',
      creationDate: '2004-08-08 13:26:15',
      rating: '5',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1BXj8KNnpL.jpg',
      genreId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fantasia',
      creationDate: '2004-08-10 13:26:15',
      rating: '3',
      imageUrl: 'https://static.wikia.nocookie.net/disney/images/5/51/Fantasia_Genesis_game_cover.jpg',
      genreId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
