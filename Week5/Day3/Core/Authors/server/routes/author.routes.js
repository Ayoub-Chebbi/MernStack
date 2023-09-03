const AuthorsControllers = require("../controllers/author.controller")

module.exports = (app)=>{
    app.get("/api/author" , AuthorsControllers.getAllAuthors)
    app.post("/api/author" , AuthorsControllers.createAuthor)
    app.put("/api/author/:id" , AuthorsControllers.updateAuthor)
    app.delete("/api/author/:id" , AuthorsControllers.deleteAuthor)
}