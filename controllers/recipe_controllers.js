const recipe = require('express').Router()
const db = require('../models')
const {Recipes , Ingredients, Steps, Recipe_ingredient} = db
const {Op} = require('sequelize')


//INDEX
recipe.get('/', async(req,res) => {
    try{
        const foundRecipes = await Recipes.findAll({
            where:{
              title:{[Op.like]:`%${req.query.title ? req.query.title : ''}%`}
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

//SHOW Find a specific Recipe returns steps ingredients and quantity in adition to recipe values 
recipe.get('/:name', async(req,res) => {
    try {
        const foundRecipe = await Recipes.findOne({
            where: { title: req.params.name},
            include:[
                {
                model:Ingredients,
                as:'ingredients',
                through:{
                    attributes:["quantity"]
                },
            }
        ,
            {
                model:Steps,
                as:"steps"
            }
        ]
        })
        // const ingredientList = await Recipe_ingredient.findAll({
        //     where:{recipe_id : foundRecipe.recipe_id},
        //})
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

        
          const newIngredient = await Ingredients.create({
                name:req.params.name
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
recipe.get('/:id', async (req, res) => {
    try {
        req.body.name = "mashed potato"
        req.body.author = "YEEEEKAI"
        req.body.image = "https://potato.com/"
        req.body.title = "Big bowl potato"
        req.body.description = "nice bowl of potato"
        const updatedRecipe = await Recipes.update(
            { author: req.body.author,
              image: req.body.image,
              title: req.body.title,
              description: req.body.description
            }, {
            where: {
                recipe_id: req.params.id
            }
        });
        await Ingredients.update(
            { name: req.body.name,
            }, {
            where: {
                ingredient_id: 14
            }
        })
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
        const deletedRecipe = await recipe.destroy({
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

