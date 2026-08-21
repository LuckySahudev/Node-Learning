const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const productModel = require('../model/productModel');
const { error } = require('console');
const Product = productModel.Product;

exports.getProducts = (req,res)=>{
    res.json(data);
}

exports.getProduct = (req,res)=>{
    const id = +req.params.id;
    const product = data.find(p=>p.id == id);
    res.json(product);
}


// Part 3 
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save(); // ✅ no callback
    console.log("product is created.");
    res.status(201).json(product);
};

// Part 2 
// exports.createProduct = async (req, res) => {
//     const product = new Product();
//     product.title = 'Phonex';
//     product.price = 99999;
//     product.rating = 5;

//     await product.save(); // ✅ no callback
//     console.log("product is created.");
//     res.status(201).json(product);
// };

exports.replaceProduct = (req, res) => {
    const id = +req.params.id;   // convert to number
    const productIndex = data.findIndex(p => p.id === id);
    const updatedProduct = { ...req.body, id: id };
    data.splice(productIndex, 1, updatedProduct);
    res.status(200).json(updatedProduct);
}

exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = data.findIndex(p => p.id === id);
    const updatedProduct = { ...data[productIndex], ...req.body };
    data.splice(productIndex, 1, updatedProduct);
    res.status(200).json(updatedProduct);
}

exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = data.findIndex(p => p.id === id);
    const deletedProduct = data[productIndex];
    data.splice(productIndex, 1);
    res.status(200).json(deletedProduct);
}