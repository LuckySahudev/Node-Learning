
// Part 1 
// const lib = require('./sum.js');
// console.log(lib);
// console.log(lib.sum(10,20));
 

// Part 2
// import{sum,diff} from './sum.js';
// console.log(sum(10,20)+" "+diff(10,20));


// Part 3 : importing filesystem module use (fs.readFileSync())

// const fs = require("fs");
// let text = fs.readFileSync("exp.txt", "utf-8");     // Sync is wait then last tasks will done 
// console.log(text);
// console.log("File is printed");


// Part 4 : importing filesystem module use (readFileSync());

// const fs = require("fs");
// fs.readFile("exp.txt", "utf-8" ,(error,text)=>{   // This function is not stop system in waiting 
//     console.log(text);
// });
// console.log("File is printed");



// Part 5
// const express = require('express');
// const server = express();
// server.listen(8080);        // when you run it will stuck // so we install nodemon


// part 6
// console.log("hello");
// console.log("hello ok");  
