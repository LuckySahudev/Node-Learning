1. Client server communtiontion 

        Browser --------->(request)--------->  Server
        Browser <---------(response)<--------  Server

        NOTE : it is a Two Way communication 

2. HTTP 

    HTTP(Protocol) REQUEST component 
        1. Request line 
            (GET,POST,PUT,DELETE,PATCH) 
        2. Header
            (brousers,language)    // it will send by browser automatically 
        3. Body
            (username, password)

    HTTP(Protocol) RESPONSE component
        1. Status Line
            (200 "ok",414)
        2. Header 
            (Server , content-type , content-length)
        3. Body
            (html.page)
    
3. RESPONCE STATUES
    
    1. Success (2xx)
        200: -->  Ok
        201: -->  Created
        202: -->  Accepted

    2. Redirection (3xx)
        301: -->  Moved Permanently 
        302: -->  Found 

    3. Clint Error (4xx)
        400:  -->  Bad Request
        401:  -->  Unauthorised
        403:  -->  Forbidden 
        404:  -->  Not Found 
        405:  -->  Method Not Allowd
    
    4. Server Error (5xx)
        500:  --> Internal Server Error
        502:  --> Bad Gateway


4. http module 
    1. initaialize
        const http = require('http');

    2. creating Server using http
        //
        const server = http.createServer((req,res)=>{
            console.log('Server is on');
        })
        server.listen(8000);
        // 
    NOTE : Server is a funtion which is run when request is created 


5. Types of Hosting

    1. Static Hosting:
    Hosting only static files like HTML, CSS, JS.
    When a request is made, the server only returns stored files.
    
        Example:
        A personal portfolio website hosted on GitHub Pages.
        Files: index.html, style.css, script.js


    2. Dynamic Hosting:
    Hosting a full backend server (like Node.js, PHP).
    The server processes requests, applies logic, and sends dynamic responses.
    
        Example:
        A Node.js website where visiting /product shows product details dynamically.


    3. API Hosting:
    Only backend is hosted.
    It communicates with frontend via requests and returns data (usually JSON).
    
        Example:
        An API endpoint like /api/products that returns product data in JSON format.
        Frontend (React/HTML) fetches this data and displays it.


6. More Usefull Funtions and methods 

    1. http.createServer((req,res)=>{
        // body of server 
    })

    2. req.url  -> use to get the request which through the server is waked-up.

    3. req.method   -> use the get the type of the reqeust (get,post,delete).
    
    4. JSON.parse("Text")   -> convert text to a json object

    5. res.setHeader('Attribute','Value')   -- > use to create and set a attribute at request header 
        example: 
                res.setHeader('Content-Type','text/html');

    6. res.writeHead(status, {'Attribute':'Value'});    --> use to add status and Atribute in response header. 
        example: 
                res.writeHead(404, {'Content-Type':'text/plain'});

    7. res.end()  --> use to send the final response 
        example: 
                res.end(JSON.stringify(data));

    8. JSON.strigify()  --> use to convert json object to string




    NOTE : we pass all thing By servers as string and give an Content-Type header browser will automaticaly convert the string to that Content-Type . 
    

7. POST body handling = reading data sent by client inside request body

    -->When a user submits a form or sends data using POST:
    -->Data is NOT in URL
    -->It is sent inside request body (hidden part)

    1. Flow of Post Body Handling 
        --> User fills form
        --> Clicks submit

        Browser sends:  POST /request 
            --> Body → { name: "lucky" }
            --> Server receives data in chunks using  -> req.on('data') , -> req.on('end')
        
    example in ( Part 4 )  (index2.html)   
    
    2. part of Post operation 
        1. req.on('data',chuck =>{
            // body of funtion where play with data 
        })
        NOTE : chunk is raw data which is provided by the POST request 
        
        example : Part 4 

        2. req.on('end',()=>{
            // body of the funtion where we send feedback responce .
        })
        
        NOTE: end us use to end the request . 

        4. Main componet which is use in POST request 
        
            res.setHeader('Access-Control-Allow-Origin', '*');  
            --> Allow to access by any static site , or port 

            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
            --> Allow get post and options 
                NOTE : IF OPTION is uses we also have to add a base case 
                Base case :- 
                    if(req.method === 'OPTIONS'){
                        res.writeHead(200);
                        res.end();
                        return;
                    }

            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            --> use to allow the Access of Content-Type while POST reqest is written on head.

        