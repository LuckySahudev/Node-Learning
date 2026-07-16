const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index1.html','utf-8');
const api = JSON.parse(fs.readFileSync('data.json','utf-8'));

let product = api.products[0];

// let products ;
// this is a way to fetch data by async funtion;
// const fetchdata = async ()=>{
//     const response = await fetch('data.json');
//     const data = await response.json();
//     products = await data["products"];
// }
// fetchdata();


const data = {
    name: "lucky",
    age: 21
} 

const server = http.createServer((req,res)=>{

    console.log(req.url);
    console.log('Server is on');
    const url = req.url;
    if(url.startsWith('/product') && req.method === "GET"){
        const id  = Number(url.split("/")[2]);
        product = api.products[id];
        res.writeHead(200, {'Content-Type':'text/html'});
        let dynamicIndex = index
        .replace('**title**',product["title"])
        .replace('**price**',product["price"])
        .replaceAll('**src**',product.images[0]);
        res.end(dynamicIndex);
        return;
    }
    // Assignment 2 quetion 2
    if(url.startsWith('/product') && req.method === 'POST'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h1>This is a Post Request</h1>');
        return; 
    }


 
    switch(req.url){
        
        case '/':
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(index);
            break;

        case '/api':
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(api));
            break;
        // case '/product':
        //     res.writeHead(200, {'Content-Type':'text/html'});
        //     let dynamicIndex = index
        //     .replace('**title**',product["title"])
        //     .replace('**price**',product["price"])
        //     .replaceAll('**src**',product.images[0]);
        //     res.end(dynamicIndex);
        //     break;
        default: 
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('404 Not Found');
    } 

    // res.setHeader('Dummy','DummyValue');
    // res.end('<h1>hello</h1>');
    // res.end(JSON.stringify(data));
    // res.end(products);

})

// Part 3 
const server2 = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/html' });
    res.end('<h1>Server 2 is on</h1>');
})


// Part 4 post request 
const server3 = http.createServer((req,res)=>{

    // ✅ CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // ✅ Handle preflight
    if(req.method === 'OPTIONS'){
        res.writeHead(200);
        res.end();
        return;
    }

    const url = req.url;

    if(url === '/named' && req.method === 'POST'){
        let body = "";

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            console.log(body);
            const parsed = JSON.parse(body);
            console.log(parsed.name);

            res.end('Data received');
        });

        return;
    }

    res.end('Server running');
});

 
const querystring = require('querystring');

const server4 = http.createServer((req,res)=>{

    console.log("server 4 is on");

    // ✅ CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method === 'OPTIONS'){
        res.writeHead(200);
        res.end();
        return;
    }

    // ✅ POST /form
    if(req.url === '/form' && req.method === 'POST'){
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            console.log("Raw:", body);

            const parsed = querystring.parse(body);

            console.log("Parsed:", parsed);

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Received: ${parsed.name}, ${parsed.age}`);
        });

        return;
    }

    // ✅ IMPORTANT fallback (THIS WAS MISSING ❗)
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Server 4 running');
});


server4.listen(5000);
server.listen(8000);     
server2.listen(9000);  
server3.listen(7000);  