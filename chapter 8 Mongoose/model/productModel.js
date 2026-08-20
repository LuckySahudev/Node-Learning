const mongoose = require('mongoose');
const { Schema } = mongoose;

// const productSchema = new Schema({
//     title: String,
//     description: String,
//     category: String,
//     price: Number,
//     discountPercentage: Number,
//     rating: Number,
//     stock: Number,
//     tags: [String],
//     brand: String,
//     weight: Number,
//     images: [String],
//     thumbnail: String
// });

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 50,
        minlength: 10,
    },
    category: {
        type: String,
        enum: ["geroucery","skin-care","food","sports","mans","womens"],
        required: true
    },
    price: {
        type: Number,
        require: true,
        min:1 
    },
    discountPercentage: {
        type: Number,
        default: 10,
        min:0,
        max:40
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    stock: {
        type: Number,
    },
    tags: [String],
    brand: String,
    weight: {
        type: Number,
        min: 0.001,
        max: 1000
    },
    images: [String],
    thumbnail: String
});

exports.Product = mongoose.model('Product', productSchema);