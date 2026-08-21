const express = require('express');
const productRouter = express.Router();
const pageController = require('../controller/pageController');

productRouter.
    get("/admin/",pageController.adminPage)
    .get("/student/",pageController.studentPage)
    .get("/teacher/",pageController.teacherPage)
    .get("/login/",pageController.loginPage);

exports.Router = productRouter;