'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recipes', {
   
      recipe_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image:{
        type:Sequelize.STRING,
        allowNull:false
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      author: {
        type: Sequelize.STRING,
        allowNull:true
      },
      servings: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull:false
      },
      instructions: {
        type: Sequelize.TEXT,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recipes');
  }
};