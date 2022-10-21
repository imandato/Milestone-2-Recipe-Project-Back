'use strict';
const {
  Model 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe_ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
     
    }
  }
  Recipe_ingredient.init({
    recipe_ingredient_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    recipe_id: {
      type:DataTypes.INTEGER,
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    quantity:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Recipe_ingredient',
    tableName:'recipe_ingredient'
  });
  return Recipe_ingredient;
};