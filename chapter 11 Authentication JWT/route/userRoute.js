const userController = require('../controller/userController');
const express = require('express');
const { user } = require('../model/userModel');
const userRouter = express.Router();

userRouter.
    post('/signup/',userController.signUp).
    post('/signin/',userController.signIn).
    get('/token/:username',userController.getToken);


exports.Router = userRouter;