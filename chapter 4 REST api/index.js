const express = require('express');
const server = express(); 
const fs = require('fs');
const { findPackageJSON } = require('module');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));

// middlewere
server.use(express.json());


// C R U D  (create,read,update,delete) operations 

// Part 1 Create operation
server.post('/products', (req, res) => {
    const product = req.body; // ✅ correct

    data.push(product);

    res.status(201).json({
        message: "Product added successfully",
        product: product
    });
});

// Part 2 Read operation

// all products
server.get('/products',(req,res)=>{
    res.json(data);
});
// one products
server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const index = data.findIndex(p => p.id == id);
    const product = data[index];
    res.json(product);
});


// Part 3 Update Put 
server.put('/products/:id', (req, res) => {
    const id = +req.params.id;   // convert to number
    const productIndex = data.findIndex(p => p.id === id);
    const updatedProduct = { ...req.body, id: id };
    data.splice(productIndex, 1, updatedProduct);
    res.status(200).json(updatedProduct);
});


// Part 3 Update patch
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = data.findIndex(p => p.id === id);
    const updatedProduct = { ...data[productIndex], ...req.body };
    data.splice(productIndex, 1, updatedProduct);
    res.status(200).json(updatedProduct);
});

// Part 4 Delete
server.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = data.findIndex(p => p.id === id);
    const deletedProduct = data[productIndex];
    data.splice(productIndex, 1);
    res.status(200).json(deletedProduct);
});


































server.listen(8080,()=>{
    console.log("Server in on");
})