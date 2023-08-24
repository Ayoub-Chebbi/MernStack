const Product = require("../models/product.model")

module.exports.CreateProduct = (req,res)=>{
    Product.create(req.body)
        .then(allProducts =>{
            console.log(allProducts)
            res.json({allProducts})
        })
        .catch(err => {res.json({message : "WHAT !!!!"})})
}