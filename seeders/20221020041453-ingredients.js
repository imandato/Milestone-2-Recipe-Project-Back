'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('ingredients', [{
      name:"dough"
     },
    {
      name:"red sauce"
    },
    {
      name:"mozzarella cheese"
    },
    {
      name:"hotdog"
    },
    {
      name:"bun"
    },
    {
      name:"oysters"
    },
    {
      name:"garlic"
    }
  ], 
  {});
    
  },

  async down (queryInterface, Sequelize) {
    
 
    await queryInterface.bulkDelete('ingredients', null, {});
    
  }
};
