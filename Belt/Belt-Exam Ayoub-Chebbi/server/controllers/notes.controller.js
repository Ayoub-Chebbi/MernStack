const Notes = require("../models/notes.model")

module.exports.getAllNotes = (req,res)=>{
    Notes.find()
        .then(Notes=>{
            res.json(Notes)
        })
        .catch(err=>console.log(err))
}

module.exports.CreateNotes = (req,res)=>{
    Notes.create(req.body)
        .then(Notes=>{
            res.json(Notes)
        })
        .catch(err=>console.log(err))
}

module.exports.getOneNote = (req,res)=>{
    Notes.findById(req.params.id)
        .then(Notes=>{
            res.json(Notes)
        })
        .catch(err=>console.log(err))
}

module.exports.UpdateNotes = (req,res)=>{
    Notes.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(Notes=>{
            res.json(Notes)
        })
        .catch(err=>console.log(err))
}

module.exports.DeleteNote = (req,res)=>{
    Notes.findByIdAndDelete(req.params.id)
        .then(Notes=>{
            res.json(Notes)
        })
        .catch(err=>console.log(err))
}