const NotesControllers = require("../controllers/notes.controller")

module.exports = (app)=>{
    app.get("/api/notes" , NotesControllers.getAllNotes)
    app.post("/api/notes" , NotesControllers.CreateNotes)
    app.get("/api/notes/:id" , NotesControllers.getOneNote)
    app.put("/api/notes/:id" , NotesControllers.UpdateNotes)
    app.delete("/api/notes/:id" , NotesControllers.DeleteNote)
}