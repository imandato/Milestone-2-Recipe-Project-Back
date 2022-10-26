'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Steps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Recipes}) {
      Steps.belongsTo(Recipes,{
        foreignKey:"recipe_id",
        as:"recipe"
        //alies will appear in json response 
      })
    }
  }
  Steps.init({
    steps_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    step_body:{
      type:DataTypes.STRING,
      allowNull:false
    },
    step_number: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    recipe_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      // forgenKey:true
    }
  }, {
    sequelize,
    modelName: 'Steps',
    tableName:'steps',
    timestamps:false
  });
  return Steps;
};