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



// middlewere
server.use(express.json());
server.use(express.static('./Public'));
server.use('/', productRouter.Router);







server.listen(8080,()=>{
    console.log("Server in on");
})