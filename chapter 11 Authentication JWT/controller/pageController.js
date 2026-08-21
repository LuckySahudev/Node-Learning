const fs = require('fs');
const path = require('path');


exports.adminPage = async (req, res) => {
    const filePath = path.join(__dirname,'..', 'view', 'admin.html');
    const admin = fs.readFileSync(filePath, 'utf-8');
    res.send(admin);
};

exports.studentPage = async (req, res) => {
    const filePath = path.join(__dirname,'..', 'view', 'student.html');
    const admin = fs.readFileSync(filePath, 'utf-8');
    res.send(admin);
};


exports.teacherPage = async (req, res) => {
    const filePath = path.join(__dirname,'..', 'view', 'teacher.html');
    const admin = fs.readFileSync(filePath, 'utf-8');
    res.send(admin);
};

exports.loginPage = async (req, res) => {
    const filePath = path.join(__dirname,'..', 'view', 'login.html');
    const login = fs.readFileSync(filePath, 'utf-8');
    res.send(login);
};