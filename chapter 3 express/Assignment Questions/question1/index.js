const express = require('express');
const fs = require('fs');
const index = fs.readFileSync('./index.html','utf-8');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const server = express();


//middle were

const auth = (req,res,next) =>{
    let flag = false;
    data.forEach(el => {
        if(Number(req.query.rollno) === el.rollno){
            flag = true;
        }
    });
    if(flag == true) next();
    else res.status(401).send('Unauthorized');
}
server.use(auth);

server.use(express.json()) // middle ware to get json from post body















// Api routes 
server.get('/',(req,res)=>{
    res.send(index);
});

server.get('/students/',(req,res)=>{
    res.status(200).send(data);
});

server.get('/student/:name',(req,res)=>{
    let st ;
    data.forEach(el =>{
        if(req.params.name == el.name){
            st = el;
        }
    });
    res.json(st);
});


server.get('/student/',(req,res)=>{
    let st ;
    data.forEach(el =>{
        if(Number(req.query.rollno)== el.rollno){
            st = el;
        }
    })
    res.json(st);
});

server.post('/student/',(req,res)=>{
    let st ;
    console.log(req.body);
    data.forEach(el =>{
        if(req.body.name == el.name){
            st = el;
        }
    })
    res.json(st);
})





















server.listen('8080',()=>{
    console.log("Server is on");
})