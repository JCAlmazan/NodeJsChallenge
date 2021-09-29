'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('characters', [{
      name: 'Mickey',
      age: '15',
      weight: '12.5',
      story: 'A funny Mouse',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/ct_mickeymouseandfriends_mickey_ddt-16970_4e99445d.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Donald',
      age: '16',
      weight: '13.5',
      story: 'A funny Duck',
      imageUrl: 'https://static.wikia.nocookie.net/disney/images/d/db/Donald_Duck_Iconic.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('characters', null, {});
  }
};

