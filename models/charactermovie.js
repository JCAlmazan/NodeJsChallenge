'use strict';
const {
  Model
} = require('sequelize');
const movie = require('./movie');
module.exports = (sequelize, DataTypes) => {
  class characterMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  characterMovie.init({
    characterId: {
      type: DataTypes.INTEGER,
      references: {
        model: character,
        key: 'id'
      }
    },
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: movie,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'characterMovie',
  });
  return characterMovie;
};