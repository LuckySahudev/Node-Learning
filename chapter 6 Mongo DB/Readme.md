1. NoSQL Database Sturcture
    
    Structure:- 
        DB Sever --> Database --> Collections --> Document

    example:-
        DB server --> University --> (student , course , teacher) -> records 

2. document 
     
     -> have a BSON data which is like json 
     -> have a primary key 


3. Steps to Run a Local host db server
    1. use command 
        mongod --dbpath "C:\Users\lenovo\Desktop\db"

    2. open second cmd and run command
        mongosh 
        NOTE : first go to program files in c drive and there is a folder of of mongosh run that on second cmd 
    
    3. Use MongoDB compass to track things 

4. C U R D opeations in cmd on MongoDB local host 

    1. Create opeation 
        1. Database 
            command : 
                use dataBase_Name 

            NOTE : if it is not exist it will created with this command

        2. Collection 
            -> when you insert any document using a name of collection it will created
            commad : 
                db.collection_name.insert({'attribute':'value'})

        3. Creating Document
            1. insertOne 
                -> use to insert one document in a collection 
                commad : 
                    db.collection_name.insert({'attribute':'value'})
            2. insertMany
                -> use to insert many document at a time 
                command : 
                    db.collection_name.insert([
                        {'atr1':'val1'}
                        {'atr2':'val2'}
                        {'atr2':'val3'}
                    ])
            
    2. Read Opertion 
        1. findOne 
            -> find one is use to find a single document in a collection 
            command: 
                db.product.find({attribute':'value'})       // not standerd
                db.products.find({'id':{$eq:1}})            // standard
        
        2. find
            -> find many document from a collection
            command: 
                db.collection_name.find({'id':{$eq:5},'price':{$gt:5}})
            
            AND opertion command:
                db.collection_name.find({$and:[{'id':{$gt:5}},{'price':{$gt:2}}]}) 

                -> We can use only "," the mongodb treated "," as and operator

            OR opertion command: 
                db.collection_name.find({$or:[{'id':{$gt:5}},{'price':{$gt:2}}]})

        3. find Only one Attribute of a document
            -> to find only one attribute from a document 
            syntex: 
                db.collection_name.find({'att1':{$eq:val}},{'att_want':1/0})  
                // 1 means true
            command: 
                db.products.find({'id':{$eq:5}},{'title':1})

    3. Update Operation
        1. updataOne
            -> use to update a single document on a collection 
            -> generally we use only updateOne to update

            command:
                db.collection_name.updateOne({'atr1':'val'},{$set:{'atr_var':'value'}})
                db.collection_name.updateOne({'atr1':'val'},{$set:{'atr_var':'value'},{'atr_var':'value'}})
                -> first atr1 is use to find that element
                -> secont atr_var is what to update
            
            exmple: 
                db.products.updateOne({'id':{$eq:10}},{$set:{'price':100}})
        
        2. updateOne with upsert 
            -> adding a more constaraint which help is that perticular document is not available so database will create it.
            
            command:
                db.collection_name.updateOne({'atr1':'val'},{$set:{'atr_var':'value'}},{'upsert':true/false})
                db.collection_name.updateOne({'atr1':'val'},{$set:{'atr_var':'value'},{'atr_var':'value'}},{'upsert':true/false})

        3. update Many
            -> use to update many document at once
                command:
                    db.collection_name.updateMany({'atr': value },{$set:{'atr_var':'value'}});
                example:
                    db.products.updateMany({'id':{$gt:5}},{$set:{'price':1000}});
    
    4. Delete Operation
        1. deleteOne
            -> use to delete a single document from a collection
            -> deletes only the first matching document

            command:
                db.collection_name.deleteOne({'atr1':'val'})
                -> atr1 is used to find the document to delete
            example:
                db.products.deleteOne({'id':10})

        2. deleteMany
            -> use to delete multiple documents at once
            -> deletes all documents matching the condition

            command:
                db.collection_name.deleteMany({'atr1':'val'})
                db.collection_name.deleteMany({'atr':{$gt:5}})
            example:
                db.products.deleteMany({'price':{$lt:500}})
            
            
        3. delete all documents

            -> use to delete all documents from a collection
            -> collection remains but data is removed
            command:
                db.collection_name.deleteMany({})
            example:
                db.products.deleteMany({})