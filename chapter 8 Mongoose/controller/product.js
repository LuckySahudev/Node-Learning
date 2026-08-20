const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const productModel = require('../model/productModel');
const { error } = require('console');
const Product = productModel.Product;

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


exports.getProducts = async (req,res)=>{
    const product = await Product.find();
    res.json(product);
}

exports.getProduct = async(req,res)=>{

    // find by id 
    // const id = +req.params.id;
    // const product = await Product.find({'id':{$eq:id}});


    // find by object id 
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
}
 

// Part 3 
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save(); // ✅ no callback
    console.log("product is created.");
    res.status(201).json(product);
};

exports.replaceProduct = async (req, res) => {
    const product = await Product.findOneAndReplace(
        { _id: req.params.id },   // or { id: req.params.id }
        req.body,
        { new: true }
    );

    res.json(product);
};

exports.updateProduct = async (req, res) => {
    const product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    );

    res.json(product);
};

exports.deleteProduct = async (req, res) => {
    const product = await Product.findOneAndDelete(
        { _id: req.params.id }
    );
    res.json(product);
};