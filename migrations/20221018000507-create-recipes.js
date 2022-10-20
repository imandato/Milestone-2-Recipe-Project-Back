'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
   
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
      description:{
        type:Sequelize.STRING,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes');
  }
};