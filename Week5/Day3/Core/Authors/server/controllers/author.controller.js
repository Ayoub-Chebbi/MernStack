const Author = require("../models/Author.model")

module.exports.createAuthor = (req,res)=>{
    Author.create(req.body)
        .then(Author => res.json(Author))
        .catch(err => res.json(err))
}

module.exports.getAllAuthors = (request, response) => {
    Author.find()
        .then(Authors => { 
            response.json(Authors);
        })
        .catch(err => {
            console.log(err)
            response.status(400).json(err)
        })
}

module.exports.updateAuthor = (request, response) => {
    Author.findByIdAndUpdate( request.params.id, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.findByIdAndDelete( request.params.id )
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}