const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    Title : {
        type: String,
        required : [true , " Title is required"]
    },
    Content : {
        type : String,
        required : [true , " Content is required"],
        minlength : [10 , "Minimum length is 10"]
    },
    isImportant : {
        type : Boolean,
    }
} ,{timestamps : true})

module.exports = mongoose.model("Notes", NotesSchema)