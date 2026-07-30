const fs = require('fs');
const { findPackageJSON } = require('module');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));



exports.getProducts = (req,res)=>{
    res.json(data);
}

exports.getProduct = (req,res)=>{
    const id = +req.params.id;
    const product = data.find(p=>p.id == id);
    res.json(product);
}

exports.createProduct = (req, res) => {
    const product = req.body; // ✅ correct

    data.push(product);

    res.status(201).json({
        message: "Product added successfully",
        product: product
    });
}

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