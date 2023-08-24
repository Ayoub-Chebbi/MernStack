const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName : String,
    ProductPrice : Number,
    ProductDescription : String,
}, {timestamps: true})

module.exports = mongoose.model("Product", ProductSchema)