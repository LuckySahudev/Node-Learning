const express = require('express');
const server = express();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));

// Part 5 //  middleware Section 
//server.use() is use when you want a middleware which is run in all type of request 


// build in middle ware 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(morgan('dev'));   // first logger
server.use(express.static('public')); // static

// then custom middleware
server.use((req,res,next)=>{
    console.log(req.method);
    next();
});





// Part 4 
// authentication using query 
const auth = (req,res,next)=>{
    console.log(req.query.password);
    if(req.query.password == '123'){
        next();
    }
    else{
        res.sendStatus(401);
    }
}
server.get('/check1',auth,(req,res)=>{
    res.json({Authorize: true});
})
// authentication using body
const auth2 = (req,res,next)=>{
    console.log(req.body);
    if(req.body.password == "123"){
        next();
    }
    else{
        res.sendStatus(401);
    }
}
server.post('/check2',auth2,(req,res)=>{
    console.log(req.body.password);
    res.json({"message": "Data received successfully"})
})





//Part 3

// input by url Using query
server.get('/product1/:id',(req,res)=>{
    console.log(req.params);
    res.json({type:'GET'});
})
// input by url Using params
server.get('/product2/',(req,res)=>{
    console.log(req.query.id);
    res.json({type:'GET'});
})
// input by body 
server.post('/',(req,res)=>{
    console.log(req.body.password);
    res.json({"message": "Data received successfully"})
})






// Part 2 // Api - End Point , Route 
server.get('/demo',(req,res)=>{
    res.json({type:'GET'})
})
server.post('/demo',(req,res)=>{
    res.json({type:'POST'})
})
server.put('/demo',(req,res)=>{
    res.json({type:'PUT'})
})
server.delete('/demo',(req,res)=>{
    res.json({type:'DELETE'})
})
server.patch('/demo',(req,res)=>{
    res.json({type:'PATCH'})
})



// Part 1 // basic request geting and resopnce 
server.get('/',(req,res)=>{

    //res.send('<h1>This is a first Page By Express');
    //req.sendFile('C:/Users/lenovo/Desktop/Codding/Node/chapter 3/index.html');
    //res.json(data);
    //res.sendStatus(404);
    res.status(404).send('<h1>Not Found in DataBase</h1>');
})

    
 





// to start server 
server.listen(8080,()=>{
    console.log("Server Started");
});