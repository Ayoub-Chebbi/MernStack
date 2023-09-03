const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors(),express.json(),express.urlencoded({extended: true}))

require("./config/author.config")
require("dotenv").config()
require('./routes/author.routes')(app);


const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`server running on ${port} `)
})