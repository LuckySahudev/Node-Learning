require('dotenv').config();
const express = require('express');
const server = express(); 
const pageRouter = require('./route/pageRoute');
const userRouter = require('./route/userRoute');
const userController = require('./controller/userController');
const mongoose = require('mongoose');
const jwt = require('JsonWebToken');
const auth = userController.auth;         // authentication 

// db connection 
main().catch(err => console.log(err));



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chapter11');
  console.log("database is connected");
}


// token authentication 

 
// middlewere
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static('./Public'));
server.use('/',userRouter.Router);
server.use('/',auth,pageRouter.Router);






server.listen(8080,()=>{
    console.log("Server in on");
})