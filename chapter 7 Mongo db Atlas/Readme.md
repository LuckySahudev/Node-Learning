1. Mongo DB atlas Structure 

    NOTE: before anything you need to install mongodb
          command : npm install mongodb

    1. MongoDB Atlas (Top Level)
        -> Cloud service where everything is managed
        -> Provides UI, security, backups, monitoring

        Think: Main platform (like AWS console)

    2. Project
        ->Logical container for your work
        Holds:
            Clusters
            Users
            Network access settings

        Think: One app / one system (e.g., “Ecommerce Project”)

            NOTE: In one Project we can make only 1

    3. Cluster
        -> Actual database server (where data is stored)
           Can be free (M0) or paid

        Think: Machine/server that runs databases

    4. Database
        ->Group of collections
        ->Used to organize data logically

        Think: Separate database for different modules
        Example: shopDB, userDB

    5. Collection
        -> Group of documents
        -> Similar to table (but flexible schema)

        Think: Table
        Example: products, users

    6. Document (Smallest Unit)
        -> Individual record (JSON-like format)
        -> fromate is called BSON

    Diagram is expain

            MongoDB Atlas
                ↓
            Project
                ↓
            Cluster
                ↓
            Database
                ↓
            Collection
                ↓
            Document



2. Process to make Project , Cluster , Database  , User , ip address 


    1. Create Project
    Steps:
        -> Go to MongoDB Atlas
        -> Click New Project
        -> Enter name (e.g., MovieApp)
        -> Click Create

        Why Project?
            -> Organizes everything
            -> Contains clusters, users, network rules

        example : Folder for your app

    2. Create Cluster
    Steps:
        -> Inside project → click Build a Cluster
        -> Choose:
                Free tier (M0)
                Cloud: AWS
                Region: Mumbai (recommended)
        -> Click Create Cluster

        Why Cluster?
            -> This is the actual database server
            -> Stores your data physically

        exapmple: Computer where database runs

    3. Create Database & Collection
    Steps:
        -> Go to Data Explorer
        -> Click Create Database

    OR:
    Steps:
        -> Go to Data/browse collection
        -> Click Create Database


    4. Create Database User (VERY IMPORTANT)
    Steps:
        -> Go to Security → Database Access
        -> Click Add New Database User
        -> Enter:
                Username: luckysahu
                Password: ********
                Role: Read and write to any database


        Why Database User is Required?
            -> Without user → NO ONE can access your database

        MongoDB Atlas uses:
        -> Authentication (username/password)
        -> Security by default (everything blocked)
        
        Database = Locker
        User = Key
        No key → no access ❌

    5. Allow IP Address
    Steps:
        -> Go to Network Access
        Add:
            0.0.0.0/0   (or your IP)

        Why IP is required?
            Atlas blocks all connections by default
            You must allow your device



3. Connection 
    1. mongosh (shall)
    steps
        -> go to cluster
        -> click on connect 
        -> there are an option to connect with shell click on that
        -> Go to bin of mongosh
        -> paste whatever command is provide by the mongodb Atlas
        -> enter password
    
    2. compass
        -> click on connect 
        -> there are an option to connect with shell click on that
        -> go to compass click on the add cluster 
        -> put link provided by the mongodb Atlas
        -> put password and connect 
    
    3. vs code 
        -> click on drivers 


4. dotenv
    -> dotenve is a extention which is use to store enviournment variable on rendering
    1. installation of dotenv
        command:
            npm install dotenv
    
    2. Create a .env file 
        -> create a .env file 
        -> put name in gitignore
    
    3. access env variable 
        -> in tarminal
            node
            process.env
        -> in any file moule 
        -> first require("dotenv").config();
            
        syntex:
            process.env.VARIABLE_NAME; 
