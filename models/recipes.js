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
    static associate({Steps,Ingredients,Recipe_ingredient}) {
      Recipes.hasMany(Steps,{
        foreignKey:"recipe_id",
        as:"steps"
      })
      Recipes.hasMany(Ingredients,{
        foreignKey:'recipe_id',
        as:"recipe",
        through: Recipe_ingredient
        
      })
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
    description:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Recipes',
    tableName: "recipes",
    timestamps:false
  });
  return Recipes;
};