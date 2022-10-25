'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('steps', [{
         step_number:1,
         step_body:"roll pizza dough into a cirle, top with a thin layer of sauce and as much cheese as you want put in oven at max heat",
         recipe_id: 1
       },
      {
        step_number:2
        ,
        step_body:"rotate the pizza after 3 minutes, take out of the oven when the cheese is melted and the crust is bubbling and brown. let pizza cool and serve",
<<<<<<< HEAD
        recipe_id: 1 
=======
        recipe_id: 1  
>>>>>>> 239a4f7e7a5dbfc9444d11265d20be05caa34a19
      },
    {
      step_number:1,
      step_body:"place hot dogs into an oil'd pan over medium heat turning occasionaly",
      recipe_id: 2

    },
  {
    step_number:2 ,
    step_body:"tost buns if desired. remove hotdogs when they have some color and are bubbling a bit.",
    recipe_id: 2

  },
  {
    step_number:3,
    step_body:"put hot dogs on buns and serve",
<<<<<<< HEAD
    recipe_id: 2
  },
  {
    step_number:1,
    step_body:"get an oyster",
    recipe_id: 3
  },
  {
    step_number:2,
    step_body:"put garlic on it",
    recipe_id: 3
  }
], {});
=======
    recipe_id:2

  }], {});
>>>>>>> 239a4f7e7a5dbfc9444d11265d20be05caa34a19
  },

  async down (queryInterface, Sequelize) {
    
   
    await queryInterface.bulkDelete('steps', null, {});
    
  }
};
