// This is a structured file you need to Uncommment according to part From all global, middle , route parts 
const express = require('express');
const server = express(); 

// Part 1 
// const productRouter = express.Router();
// const productController = require('./controller/product');  // import controller funtions 
// Part 2
const productRouter = require('./route/productRouter');



// middlewere

server.use(express.json());
// Part 1 
// server.use('/',productRouter);
// Part 2
server.use('/', productRouter.Router);






// Part 1 
// Routing 
// productRouter.post('/products',productController.createProduct );
// productRouter.get('/products',productController.getProducts);
// productRouter.get('/products/:id',productController.getProduct);
// productRouter.put('/products/:id',productController.replaceProduct );
// productRouter.patch('/products/:id',productController.updateProduct);
// productRouter.delete('/products/:id',productController.deleteProduct);



server.listen(8080,()=>{
    console.log("Server in on");
})