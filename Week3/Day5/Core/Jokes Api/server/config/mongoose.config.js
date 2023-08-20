const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/my_first_db")
    .then(()=>console.log("connected"))
    .catch(()=>(console.log("not connected")))