
const recipe = require('express').Router()
const db = require('../models')
const {Recipes , Ingredients, Steps, Recipe_ingredient} = db
const{Op} = require('sequelize')


//INDEX
recipe.get('/', async(req,res) => {
    try{
        const foundRecipes = await Recipes.findAll({
            attributes:["title", "author"]
        })
        res.status(200).json({
            message:"found all recipes",
            data:foundRecipes
        })
    }catch(err){
        res.status(500).json(err)
    }
    
})

//SHOW
recipe.get('/:name', async(req,res) => {
    try {
        const foundRecipe = await Recipe.findOne({
            where: { title: req.params.name }
        })
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