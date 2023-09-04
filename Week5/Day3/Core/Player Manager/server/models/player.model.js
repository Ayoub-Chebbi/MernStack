const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : [true , "Name is required"]
    },
    Position : {
        type : String,
        
    }
}, {timestamps:true})

module.exports = mongoose.model("Player", PlayerSchema)