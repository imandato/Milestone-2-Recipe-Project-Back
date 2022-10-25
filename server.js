//DEPENDENCIES
const express = require('express')
const app = express();
const { get } = require('./controllers/recipe_controllers');

//MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//ROOT 
app.get('/',(req, res)=>{
    res.status(200).send('now we\'re cooking 🍜')
})

//CONTROLERS
const recipeController = require('./controllers/recipe_controllers')
app.use('/recipe',recipeController)

//LISTEN
app.listen(process.env.PORT, ()=>{
    console.log(` 🍳 cooking on port: ${process.env.PORT} `)
    
})