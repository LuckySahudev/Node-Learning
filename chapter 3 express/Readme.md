1. initalize express . 
    syntex :- 
    const express = require('express');

    NOTE: first we want to install exprese 
    command : npm install express

2. Initalization and Linstening of server . 
    syntex:-
    const server =  express();   // use to initalize server
    server.listen(8000,()=>{
        // use to listen on ,port 8000 is port
    })

3. Api creation
    syntex:-

    server.get('/',(req,res)=>{
        // body of server
    })
    server.post('/',(req,res)=>{
        // body of server
    })
    
    // see in Part 2
    NOTE: 1. in Node.js we use to seperate manually the routes using req.url and string funtion
             but in express that thing is easy.
          2. If you change only method (get,post,patch,delete,put) with the same route so the fuctions will be differnt 

4. Basic req,res funtions
 
    res.send('<h1>This is a first Page By Express</h1>');
    // use to send string 

    req.sendFile('C:/Users/lenovo/Desktop/Codding/Node/chapter 3/index.html');
    // use to send a file 

    res.json(data);
    // use to send json object 

    res.sendStatus(404);
    // use to send status 

    res.status(404).send('<h1>Not Found in DataBase</h1>');
    // use to send status and string

5. Input from post or get request

    1. query -> query a input agrument from the to get info by url 
        url syntex:
            /demo/?attribute=value
        api syntex:
            req.query.attribute
        
        example 
            server.get('/product2/',(req,res)=>{
                console.log(req.query.id);
                res.json({type:'GET'});
            })
    2. params -> params is a parameter passed by the url direct access by the object key in backend
        
        url syntex: 
            /demo/10
        api syntex:
            /demo/:id
        use in funtion 
            req.params
        
        example:- 
            // input by url Using query
            server.get('/product1/:id',(req,res)=>{
                console.log(req.params);
                res.json({type:'GET'});
            })

    3. body -> input by body in body we have a object then the key of object inside body we can access 
    
        api syntex :
            body.objectName.attribute
        
        example:- 
            server.post('/',(req,res)=>{
                console.log(req.body.password);
                res.json({"message": "Data received successfully"})
            })

6. Middle were : Middle ware is a gateway of the request which is run first then decide to send
                 back request or give access to another functions on server. 
    
        1. create a middle ware (costom)
            syntex:
                server.use((req,res,next)=>{
                    // callback funtion 
                    next() // if next is run so reqest will go to access server resources
                })
        
        2. static middle were 
            syntex: 
                server.use(express.static('folder_name')); 
                // that folder_named folder will give access directly to user 
                // generally it is use to store the static files like html , css , js , images
        
        3. built in middle were

            server.use(express.json());
            server.use(express.urlencoded({ extended: true }));

        
        4. Third party middle ware 
            example: 
                server.use(morgan('dev'));   // first logger
        
       
