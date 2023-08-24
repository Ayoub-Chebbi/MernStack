const express = require("express")
const cors = require('cors');
const app = express()


app.use(cors());
app.use(express.json(),
 express.urlencoded({extended: true}))

require("dotenv").config()
require("./config/mongoose.config")
require("./routes/product.routes")(app)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`server running on ${port} `)
})