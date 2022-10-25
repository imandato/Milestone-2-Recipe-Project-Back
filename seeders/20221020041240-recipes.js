'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  
     await queryInterface.bulkInsert('recipes', [{
       title: 'Pizza',
       image:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
       author:"Dallas",
       description:"a great tasty pizza in just a few minutes"
     },
    {
      title: 'Hot Dogs',
       image:"https://www.allrecipes.com/thmb/KHR1QU58JIBIoXCqPSjUbDmQXdk=/2000x1125/filters:no_upscale()/Basic-Air-Fryer-Hot-Dogs-16x9-1-2000-f81352a31f19409b899528a60a705795.jpg",
       author:"Lynn",
       description:"Delicious franks better then at the ball park"
    },
    {
      title: 'Oysters Fest',
      image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8559190.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
      author:"Yekai",
      description:"Juicy Oysters with sparkling seasoning"
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
 
    await queryInterface.bulkDelete('recipes', null, {});
    
  }
};
