'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('recipe_ingredients', [{
      recipe_id:1,
      ingredient_id:1,
      quantity:"1 Lb"
    },
    {
      recipe_id:1,
      ingredient_id:2,
      quantity:"2 Tbs"
    },
    {
      recipe_id:1,
      ingredient_id:3,
      quantity:"1 Cup"
    },
    {
      recipe_id:2,
      ingredient_id:4,
      quantity:"1"
    },
    { recipe_id:2,
      ingredient_id:5,
      quantity:"1"}
], {});
      },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('recipe_ingredients', null, {});
    
  }
};
