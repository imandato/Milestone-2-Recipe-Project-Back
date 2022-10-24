
const recipe = require('express').Router()
const db = require('../models')
const {Recipes , Ingredients, Steps, Recipe_ingredient} = db
const{Op} = require('sequelize')
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
recipe.post('/', (req,res) => {
    res.send(
        'Index'
    )
    Recipe.push(req.body)
    res.redirect('/recipe')
})

//EDIT
recipe.get('/:id', (req,res) => {
    res.send('places/edit')
})

//DELETE
recipe.delete('/:id', (req, res) => {
    recipe.splice(req.params.id, 1)
    res.status(303).redirect('/recipe')
  })


module.exports = recipe