1. mongoose : it is a package that is use to make json to bson or bson to json . 
    -> it is like a bridge b/w the mongodb database and the json object

    1. installment of mongoose
        -> Installment is include the install at shell
        command:
            npm install mongoose
    
    2. require mongoose
        syntex:
            const mongoose = require('mongoose');

2. Schema : schema is like blue print of the model 
    
    1. Creatinon of Schema
        syntex: 
            const {Schema} = mongoose;
    
    2. insitalization of schema 
        syntex : 
            const schema_name = new Schema{
                attribute1 : value1,
                attribute2 : value2,
                attribute3 : value3
            }
        example:
            const productSchema = new Schema({
            title: String,
            description: String,
            category: String,
            price: Number,
            discountPercentage: Number,
            rating: Number,
            stock: Number,
            tags: [String],
            brand: String,
            weight: Number,
            images: [String],
            thumbnail: String
        });

    3. Export schema
        syntex:
            exports.schema_name = mongoose.model('schemaNameToAccess',schema_name)

    4. Import schema




3. In index.js or server.js or app.js file 

    const mongoose = require('mongoose');
    // db connection 
    main().catch(err => console.log(err));

    async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log("database is connected");
    }


4. Constraints 
    -> contraints are use to define the defination for schema attributes
    -> The permitted SchemaTypes are:
        String
        Number
        Date
        Buffer
        Boolean
        Mixed
        ObjectId
        Array
        Decimal128
        Map
        UUID
        Double
        Int32


5. MONGOOSE VALIDATORS (BASIC)

    1. REQUIRED VALIDATOR
        -> Ensures field is not empty.

        Example:
        name: {
            type: String,
            required: true
        }


    2. MIN / MAX (NUMBER)
        -> Restricts numeric values within range.

        Example:
        age: {
            type: Number,
            min: 18,
            max: 60
        }


    3. MINLENGTH / MAXLENGTH (STRING)
        -> Controls length of string.

        Example:
        username: {
            type: String,
            minlength: 3,
            maxlength: 15
        }


    4. ENUM VALIDATOR
        -> Allows only specific values.

        Example:
        role: {
            type: String,
            enum: ["admin", "user", "guest"]
        }


    5. MATCH (REGEX)
        -> Validates using pattern.

        Example:
        email: {
            type: String,
            match: /.+\@.+\..+/
        }


    6. DEFAULT VALUE
        -> Sets default value if not provided.

        Example:
        isActive: {
            type: Boolean,
            default: true
        }


    7. UNIQUE (NOTE)
        -> Not a validator, creates unique index.

        Example:
        email: {
            type: String,
            unique: true
        }


    8. CUSTOM VALIDATOR
        -> Define your own validation logic.

        Example:
        password: {
            type: String,
            validate: {
                validator: function(v) {
                    return v.length >= 6;
                },
                message: "Password must be at least 6 characters"
            }
        }

    2. MIN / MAX (NUMBER)
    Restricts numeric values.

    Example:
    age: {
    type: Number,
    min: 18,
    max: 60
    }

    3. MINLENGTH / MAXLENGTH (STRING)
    Controls string length.

    Example:
    username: {
    type: String,
    minlength: 3,
    maxlength: 15
    }

    4. ENUM VALIDATOR
    Allows only specific values.

    Example:
    role: {
    type: String,
    enum: ["admin", "user", "guest"]
    }

    5. MATCH (REGEX)
    Validates using pattern.

    Example:
    email: {
    type: String,
    match: /.+@.+..+/
    }

    6. DEFAULT VALUE
    Sets default if not provided.

    Example:
    isActive: {
    type: Boolean,
    default: true
    }

    7. UNIQUE (NOTE)
    Not a validator, creates index.

    Example:
    email: {
    type: String,
    unique: true
    }

    8. CUSTOM VALIDATOR
    Define your own logic.

    Example:
    password: {
    type: String,
    validate: {
    validator: function(v) {
    return v.length >= 6;
    },
    message: "Password must be at least 6 characters"
    }
    }

    FULL SCHEMA EXAMPLE:

    const mongoose = require("mongoose");

    const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 18, max: 60 },
    email: { type: String, required: true, match: /.+@.+..+/ },
    role: { type: String, enum: ["admin", "user"] },
    password: {
    type: String,
    validate: {
    validator: v => v.length >= 6,
    message: "Password too short"
    }
    }
    });

    module.exports = mongoose.model("User", userSchema);

    NOTES:

    * Validators run before save()

    * For update operations use:
    Model.updateOne({}, {}, { runValidators: true });

    * Handle errors:
    try {
    await user.save();
    } catch (err) {
    console.log(err.message);
    }



6. Model funtions 

Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()