const PlayerControllers = require("../controllers/player.controller")

module.exports = (app)=>{
    app.get("/api/player" , PlayerControllers.getAllPlayers)
    app.post("/api/player" , PlayerControllers.CreatePlayer)
    app.put("/api/player/:id" , PlayerControllers.UpdatePlayers)
    app.delete("/api/player/:id" , PlayerControllers.DeletePlayer)
}