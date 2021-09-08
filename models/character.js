'use strict';
const {
  Model
} = require('sequelize');
const charactermovie = require('./charactermovie');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      character.belongsToMany(models.movie, { through: models.charactermovie });
    }
  };
  character.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.DECIMAL(6,4),
    story: DataTypes.STRING,
    image: DataTypes.BLOB('long'),
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'character',
  });
  return character;
};