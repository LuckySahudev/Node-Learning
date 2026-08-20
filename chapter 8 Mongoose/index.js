const express = require('express');
const server = express(); 
const productRouter = require('./route/productRouter');
const mongoose = require('mongoose');

// db connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database is connected");
}

// Part 1 Steps to make data base 
// db connection
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//   console.log("database is connected");
// }

// const productSchema = new Schema({
//     title: String,
//     description: String,
//     category: String,
//     price: Number,
//     discountPercentage: Number,
//     rating: Number,
//     stock: Number,
//     tags: [String],
//     brand: String,
//     weight: Number,
//     images: [String],
//     thumbnail: String
// });

// const Product = mongoose.model('Product', productSchema);





// middlewere
server.use(express.json());
server.use('/', productRouter.Router);







server.listen(8080,()=>{
    console.log("Server in on");
})