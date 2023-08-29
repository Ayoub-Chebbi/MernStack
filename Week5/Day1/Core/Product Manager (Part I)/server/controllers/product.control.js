const Product = require("../models/product.model")

module.exports.CreateProduct = (req,res)=>{
    Product.create(req.body)
        .then(allProducts =>{
            console.log(allProducts)
            res.json({allProducts})
        })
        .catch(err => {res.json({message : "WHAT !!!!"})})
}

module.exports.getAllProducts = (request, response) => {
    
    Product.find({})
        .then(products => {
            console.log(products);
            response.json(products);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getProduct = (request, response) => {
    
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.updateProduct = (request, response) => {
    Product.findByIdAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then((updatedProduct) => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}