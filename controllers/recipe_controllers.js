const express = require('express')
const router = express.Router()
const Recipe = require()

//INDEX
router.get('/', (req,res) => {
    res.render(
        'Index'
    )
    res.send()
})

//SHOW
router.get('/:arrayIndex',(req,res) => {
    if(Recipe[req.params.arrayIndex]){
        res.render('Show', {
            recipe:Recipe[req.params.arrayIndex],
            index:req.paramas.arrayIndex,
        })
    } else {
        res.render('Error')
    }
})

//CREATE
router.post('/', (req,res) => {
    res.render(
        'Index'
    )
    Recipe.push(req.body)
    res.redirect('/recipe')
})

//EDIT
router.get('/edit', (req,res) => {
    res.render('places/edit')
})

//DELETE
router.delete('/:indexArray', (req, res) => {
    Recipe.splice(req.params.indexArray, 1)
    res.status(303).redirect('/recipe')
  })


module.exports = router