'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipes.init({
    recipe_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    author:{
      type:DataTypes.STRING,
      allowNull:true
    },
    servings: {
      type:DataTypes.INTEGER, 
      allowNull:false
    },
    ingredients: {
      type:DataTypes.ARRAY(DataTypes.STRING)
    },
    instructions: {
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Recipes',
  });
  return Recipes;
};