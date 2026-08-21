const express = require('express');
const productRouter = express.Router();
const pageController = require('../controller/product');

productRouter.
    get("/admin/",pageController.adminPage)
    .get("/student/",pageController.studentPage)
    .get("/teacher/",pageController.teacherPage);

exports.Router = productRouter;