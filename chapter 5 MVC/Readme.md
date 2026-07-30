1.  MVC -> Model-View-Controller

    // Model -> Predefine set of rules , Business Rules.
    // View -> What user get Like Static or Dynaminc webpage , webApp etc 
    // Controler -> the logic behind it how the data will retrive , update , delete . 

2. Route
    -> Route is a directory which is use to Store js file related to Routing.
    -> Routing is contains the responce funtionality. 
    -> Mainally the P O S T opetaion is preform in Route
    
    1. Steps to write a Router file 

        1. Require express module 
            syntex: 
                const express = require('express');

        2. Initalize Router 
            syntex: 
                const productRouter = express.Router();
                
        3. Connect Controller 
            syntex:
                const productController = require('../controller/product');
        4. Export Router
            syntex:
                exports.Router = productRouter;

        Example : 
            productRouter.
             post('/products',productController.createProduct )
            .get('/products',productController.getProducts)
            .get('/products/:id',productController.getProduct)
            .put('/products/:id',productController.replaceProduct )
            .patch('/products/:id',productController.updateProduct)
            .delete('/products/:id',productController.deleteProduct);

3. controller
    -> Controller is a directory which store the full initalization and defination of the Controller funtions 
    -> it is just a funtion file or nothing 
    
    1. Steps to write a Contorller file
        1. initalize all funtion according to Router 
        2. export that files 

