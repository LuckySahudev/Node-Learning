const express = require('express');
const productRouter = express.Router();
const productController = require('../controller/product');

productRouter.
     post('/products',productController.createProduct )
    .get('/products',productController.getProducts)
    .get('/products/:id',productController.getProduct)
    .put('/products/:id',productController.replaceProduct )
    .patch('/products/:id',productController.updateProduct)
    .delete('/products/:id',productController.deleteProduct);

exports.Router = productRouter;