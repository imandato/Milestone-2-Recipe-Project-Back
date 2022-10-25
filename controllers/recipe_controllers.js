const recipe = require('express').Router()
const db = require('../models')
const {Recipes , Ingredients, Steps, Recipe_ingredient} = db
<<<<<<< HEAD
const {Op} = require('sequelize')
=======
const{Op} = require('sequelize')
const ingredients = require('../models/ingredients')
>>>>>>> 239a4f7e7a5dbfc9444d11265d20be05caa34a19


//Index - show 5 recipes in database randomly (100 recipes)
recipe.get('/', async(req,res) => {
    try{
        const foundRecipes = await Recipes.findAll({
<<<<<<< HEAD
            order: [ [ Sequelize.fn('RANDOM') ] ],
            limit: 3, 
            attributes:["title", "author"],
            where:{
              title:{[Op.like]:`%${req.query.title ? req.query.title : ''}%`}
            },
            include:{
                model:Steps,
                as:"steps"
=======
            attributes:["title", "author"],
            where:{
              title:{[Op.like]:`%${req.query.title ? req.query.title : ''}%`}
>>>>>>> 239a4f7e7a5dbfc9444d11265d20be05caa34a19
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

<<<<<<< HEAD
//INDEX
recipe.get('/1', async(req,res) => {
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

//SHOW-find all recipes by author
recipe.get('/:author', async(req,res) => {
    try{
        const foundRecipes = await Recipes.findAll({
            where:{author:req.params.author}}
        )
        res.status(200).json({
            message:`found all recipes with author: ${req.params.author}`,
            data:foundRecipes
        })
    }catch(err){
        res.status(500).json(err)
=======
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
>>>>>>> 239a4f7e7a5dbfc9444d11265d20be05caa34a19
    }
})

//CREATE
recipe.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipes.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new recipe',
            data: newRecipe
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//UPDATE
recipe.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipes.update(req.body, {
            where: {
                recipe_id: req.params.id
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
        res.status(200).json({
            message: `Successfully deleted ${deletedRecipe} recipe(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = recipe