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
      characterMovie.belongsTo(models.character,
        {            
          foreignKey: 'characterId',
        }
      );
      characterMovie.belongsTo(models.movie,
        {              
          foreignKey: 'movieId',
        }
      );
    }
  };
  characterMovie.init({
    characterId: DataTypes.INTEGER,  
    movieId: DataTypes.INTEGER     
  }, {
    sequelize,
    modelName: 'characterMovie',
  });
  return characterMovie;
};