const Player = require("../models/player.model")

module.exports.getAllPlayers = (req,res)=>{
    Player.find()
        .then(Players =>{
            res.json(Players);
        })
        .catch(err=> res.json(err))
}

module.exports.CreatePlayer = (req,res)=>{
    Player.create(req.body)
        .then(Players => res.json(Players))
        .catch(err=>res.json(err))
}

module.exports.UpdatePlayers = (req,res)=>{
    Player.findByIdAndUpdate(req.params.id, req.body,{new:true})
        .then(updatePlayer => res.json(updatePlayer))
        .catch(err=>res.json(err))
}

module.exports.DeletePlayer = (req,res)=>{
    Player.findByIdAndDelete(req.params.id)
        .then(deletePlayer => res.json(deletePlayer))
        .catch(err=> res.json(err))
}