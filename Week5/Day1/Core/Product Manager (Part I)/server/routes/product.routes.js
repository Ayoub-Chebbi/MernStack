const ProductControllers = require("../controllers/product.control")
console.log(ProductControllers)

module.exports = (app)=>{
    app.post("/api/product", ProductControllers.CreateProduct)
    app.get('/api/product', ProductControllers.getAllProducts);
    app.get('/api/product/:id', ProductControllers.getProduct);
    app.put('/api/people/:id', ProductControllers.updateProduct);
    app.delete('/api/people/:id', ProductControllers.deleteProduct);
}

