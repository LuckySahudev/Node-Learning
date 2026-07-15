1. commands 

    1. node -> to start node on terminal
        NOTE : you can run js on terminal after node command ( it is not includes document like webserver ).
    2. crl + d -> to back from the node
    3. crl + c -> off the node server
    4. node file_name -> to run that file in node enviornment

2. all files is called module in node js . 

3. export and import with module (Comman js module)

    if you want to use any file funtion to another so we use export . 

    1. export -> means export from a file it can be a funtion and it can be a variable 
        syntex :-
            exports.funtion_name = funtion_name;  

            // exports will make a object which holds funtions or variables


    2. require -> it is use to import object form any another file which holds funtion or variable
        syntex :-
            const object_name = require(./file_name);

            // object_name is a name of object where the import things are stores 
            // requires is go to that location a bring that object;

    NOTE :  to use the imported object funtion we use "." operator ex:-  object_name.funtion_name();


4. export and import with (ECMA Script Module)

    1. export 
        syntex:-
            export{funtion1_name, funtion2_name};
    2. import 
        syntex:- 
            import{funtion1_name , funtion2_name} from './file_name';

    NOTE  can access direct with the funtion name ;


5. Modules 

    1. filesystem module
        imoprt syntex:- 
            const fs = require('fs');

        fs module funtions 
        
        1. fs.readFileSync('file_name','utf-8');                   
        2. fs.readFile('file_name','utf-8',(err,txt)=>{
            //use that text
        })

        NOTE : if use Sync the js is wait for the the opertion 



6. Creating package.json
    command :-
        npm init
    // run on terminal and terminal will ask few quesion and then make it will make a package.json
    
7. Install express using npm
    command :-
        npm install express 
    // when we install show one dependency is added in package.json which is express . 
    // express is a module which is also dependend on another module so , 
    // when we install express so there are also a "node_modules" folder is created . 

8. Install nodemon 

    1. install for devdependecy
    command :-
        npm install nodemon --save-dav
    // Problem : normal js code is runs perfectly in node ( Part 5 )
                 but when we use the servers to it will start and not stop whenever you use 
                 crl + c 
    // solution : we use nodemon it is not usefull for our code but usefull to stop server 

    // --save-dav is use to save as dev dependency at package.json 

    NOTE: 1.  dependencies are not directly run
                // we need a script 
                "start": "nodemon index.js"   // put it to package.json script to run nodemon
                // run command is 
                command : npm run start
                command : npx index.js 

          2. Nodemon work like a server which will run the program again and again when any changes is done. (Part 6)

          3. If it is not install globally so we use command
            command:-
                npx nodemon index.js

    2. install for globle
    command:- 
        npm install -g nodemon

    command to run file: 
        nodemon file_name;

9. Install (command ) -> use to install those modules which are required to run a project. or deleted from a package 
    command :-
        npm install

10. Outdated (command) -> use to check if any dependecy is outdated or not 
    command :-
        npm outdated

11. Update (command) -> use to check if any outdated version is available in depency os this command will update them 
    command :- 
        npm update

12. Version reading and property (*,^,~)
    syntex of the version 
    "express": "^5.2.1"
    
    NOTE :  version control signs 
            * → update anything
            ^ → safe updates
            ~ → very safe (only bug fixes)

NOTE : 1. best practice is to not push the file node_module in git hub . 
       2 . if you want to ignore any file to upload at git you can do few steps
           -> make a file gitignore
           -> in file write the file name which you want to ignore.















10. time staps for any line exciution 
    syntex :-
        let a = performance.now();