const recipe = require('express').Router()
const db = require('../models')
const {Recipes , Ingredients, Steps, Recipe_ingredient} = db
const {Op} = require('sequelize')


//Index - show 5 recipes in database randomly (100 recipes)
recipe.get('/', async(req,res) => {
    try{
        var foundRecipes = [];
        while(foundRecipes.length < 5){
            var r = Math.floor(Math.random()*100) + 1;
            var found = Recipes.findAOne({
                where:{recipes_id: r }
            })
            if(foundRecipes.indexOf(found) === -1){
                foundRecipes.push(found);
            }
        }
        res.status(200).json({
            message:"Found 5 recipes you might want!",
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

//SHOW-Find all recipes by title
recipe.get('/:title', async(req,res) => {
    try {
        const foundRecipe = await Recipes.findAll({
            where: { title: req.params.title }
        })
        res.status(200).json({
            message:`found all recipes with title: ${req.params.title}`,
            data:foundRecipe})
    } catch (error) {
        res.status(500).json(error)
    }
})

//SHOW-Find all recipes by one ingredient's name
recipe.get('/:name', async(req,res) => {
    try {
        const foundRecipe = await Recipes.findAll({
            where: { name: req.params.name }
        })
        res.status(200).json({
            message:`found all recipes with ingredient: ${req.params.name}`,
            data:foundRecipe})
    } catch (error) {
        res.status(500).json(error)
    }   
})

//SHOW-find all recipes by step number
recipe.get('/:step_num', async(req,res) => {
    try {
        const foundRecipe = await Recipes.findAll({
            where: { step_number: req.params.step_num }
        })
        res.status(200).json({
            message:`found all recipes with steps number: ${req.params.step_num}`,
            data:foundRecipe})
    } catch (error) {
        res.status(500).json(error)
    }
})

//Filter all recipes without ingredients
recipe.get('/:no_name', async(req,res) => {
    try {
        const foundRecipe = await Recipes.findAll({
            where: { [Op.not]:{name:req.params.no_name}
        }})
        res.status(200).json({
            message:`found all recipes without ingredients: ${req.params.no_name}`,
            data:foundRecipe})
    } catch (error) {
        res.status(500).json(error)
    }  
})

//CREATE


//UPDATE


module.exports = recipe