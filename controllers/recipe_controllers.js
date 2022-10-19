const express = require('express')
const recipe = express.Router()


//INDEX
recipe.get('/', (req,res) => {
    res.send(
        'Index'
    )
    res.send()
})

//SHOW
recipe.get('/:id',(req,res) => {
    // if(Recipe[req.params.arrayIndex]){
    //     res.send('Show', {
    //         recipe:Recipe[req.params.arrayIndex],
    //         index:req.paramas.arrayIndex,
    //     })
    // } else {
    //     res.send('Error')
    // }
    res.send(`recipe index at ${req.params.id}`)
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