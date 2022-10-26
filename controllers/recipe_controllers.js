const recipe = require('express').Router()
const db = require('../models')
const {Recipes , Ingredients, Steps, Recipe_ingredient} = db
const {Op} = require('sequelize')

const ingredients = require('../models/ingredients')

//INDEX
recipe.get('/', async(req,res) => {
    try{
        const foundRecipes = await Recipes.findAll({
            attributes:["title", "author"],
            where:{
              title:{[Op.like]:`%${req.query.title ? req.query.title : ''}%`}
            },
            include:{
                model:Steps,
                as:"steps"
            }
        })
        res.status(200).json({
            message:"found all recipes",
            data:foundRecipes
        })
    }catch(err){
        res.status(500).json(err)
    }
    
})

//SHOW Find a specific Recipe 
recipe.get('/:name', async(req,res) => {
    try {
        const foundRecipe = await Recipes.findOne({
            where: { title: req.params.name},
            include:[{
                model:Ingredients,
                as:'ingredients',
                through:{
                    attributes:["quantity"]
                }
            }]
        })
        console.log("hi")
        res.status(200).json(foundRecipe)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE
recipe.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipes.create(
            { author: req.body.author,
              image: req.body.image,
              title: req.body.title,
              description: req.body.description
            })
        
        const newStep = await Steps.create({
            step_body: req.body.step_body,
            step_number: req.body.step_number,
            recipe_id: newRecipe.recipe_id
          })   

        
          const newIngredient = await req.body.name.value.forEach(value =>{
                      Ingredients.create({
                          name: value
                    })
          }) 
          
          

          const newRecipe_Ingredient = await Recipe_ingredient.create({
                recipe_id: newRecipe.recipe_id,
                ingredient_id:newIngredient.ingredient_id,
                quantity:req.body.quantity
          })
            res.status(200).json({
            message: `Successfully inserted info in all tables ${req.body.name.value.length}`,
            data:[newRecipe,newStep,newIngredient,newRecipe_Ingredient]
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


//UPDATE
recipe.get('/:name/edit', async (req, res) => {
    try {
        req.body.recipe_id = 3
        var tests = ["smash them", "water them", "eat them"]
        // req.body.author = "YEEEEKAI"
        // req.body.image = "https://potato.com/"
        // req.body.title = "Big bowl potato"
        // req.body.description = "nice bowl of potato"

        const updatedRecipe = 
        tests.forEach((step,index) =>{
            Steps.findOrCreate(
                {where: 
                    {recipe_id : req.body.recipe_id,
                        step_number : index + 1,
                        }
                }
            )   
            Steps.update({ step_body: step}
                ,{ where: 
                    {recipe_id : req.body.recipe_id,
                    step_number : index + 1}
                },
            )
            if (step==="") {Steps.destroy({
                where: {
                    recipe_id: req.body.recipe_id,
                    step_number: index + 1 
                    }
                }
        )}
        }
        )
        // await Recipes.update(
        //     { author: req.body.author,
        //       image: req.body.image,
        //       title: req.body.title,
        //       description: req.body.description
        //     }, {
        //     where: {
        //         recipe_id: req.body.recipe_id
        //     }
        // });
        // await Ingredients.findOrCreate(
        //     { where: {name: req.body.name}
        //       }
        //   );
//Update, need front-end function to put empty value for remove a pre-existing step.
        // await Steps.transaction(


        //     )  
// find or create step that is never entered.
        // await Steps.findOrCreate(
        //     { where: {step_number: req.body.step_number, step_body:req.body.step_body
        //       }
        //     });
        // await Recipe_ingredient.update(
        //     { author: req.body.author,
        //         image: req.body.image,
        //         title: req.body.title,
        //         description: req.body.description
        //       }, {
        //       where: {
        //           recipe_id: req.recipe_id
        //       }
        //   });
        res.status(200).json({
            message: `Successfully updated ${updatedRecipe} recipe(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE
recipe.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipes.destroy({
            where: {
                recipe_id: req.params.id
            }
        })

        const deleteSteps = await Steps.destroy({
            where: {
                recipe_id: req.params.id
            }
        })

        const deleteRecipeIngredient = await Recipe_ingredient.destroy({
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRecipe} recipe(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = recipe