'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('steps', [{
         step_number:1,
         step_body:"roll pizza dough into a cirle, top with a thin layer of sauce and as much cheese as you want put in oven at max heat",
         recipe_id: 14
       },
      {
        step_number:2
        ,
        step_body:"rotate the pizza after 3 minutes, take out of the oven when the cheese is melted and the crust is bubbling and brown. let pizza cool and serve",
        recipe_id: 14  
      },
    {
      step_number:1,
      step_body:"place hot dogs into an oil'd pan over medium heat turning occasionaly",
      recipe_id: 15

    },
  {
    step_number:2 ,
    step_body:"tost buns if desired. remove hotdogs when they have some color and are bubbling a bit.",
    recipe_id: 15

  },
  {
    step_number:3,
    step_body:"put hot dogs on buns and serve",
    recipe_id:15

  }], {});
  },

  async down (queryInterface, Sequelize) {
    
   
    await queryInterface.bulkDelete('steps', null, {});
    
  }
};
