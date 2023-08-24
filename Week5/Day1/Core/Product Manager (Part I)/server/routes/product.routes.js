const ProductControllers = require("../controllers/product.control")
console.log(ProductControllers)

module.exports = (app)=>{
    app.post("/api/product", ProductControllers.CreateProduct)
}

