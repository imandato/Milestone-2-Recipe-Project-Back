const recipe = require('express').Router()
const db = require('../models')
const {Recipes , Ingredients, Steps, Recipe_ingredient} = db
const {Op} = require('sequelize')


//Index - show 5 recipes in database randomly (100 recipes)
recipe.get('/', async(req,res) => {
    try{
        const foundRecipes = await Recipes.findAll({
            order: [ [ Sequelize.fn('RANDOM') ] ],
            limit: 3, 
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