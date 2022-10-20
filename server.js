//DEPENDENCIES

const express = require('express')
const app = express();
const { Sequelize } = require('sequelize')


//MIDDLEWARE

require('dotenv').config()

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}


//ROOT 
app.get('/',(req, res)=>{
    res.status(200).send('now we\'re cooking 🍜')
})

//LISTEN
app.listen(process.env.PORT, ()=>{
    console.log(` 🍳 cooking on port: ${process.env.PORT} `)
    
})