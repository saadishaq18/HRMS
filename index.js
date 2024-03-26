const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const { handleDbToConnect } = require('./config/dbConn')
require('dotenv').config()

//creating app
const app = express()

const port = process.env.PORT

//Database Connection
const dbUrl = `mongodb://localhost:27017/${process.env.DATABASE}`
handleDbToConnect(dbUrl).then(()=>{
    console.log("Database Connected")
})


//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api', routes)

//starting server
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})


