'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('steps', {
      steps_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      step_body: {
        type: Sequelize.STRING,
        allowNull:false
      },
      step_number: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('steps');
  }
};