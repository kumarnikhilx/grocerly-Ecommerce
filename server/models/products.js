const mongoose =require("mongoose");

const productschema =mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:[{
        type: String,
        required: true

    }],
    brand:{
        type:String,
        default: '',
    },
    price:{
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: {
        type: Number,
        required :true,
    },
    rating:{
        type:Number,
        default: 0,
    },
    numReviews:{
        type:Number,
        default: 0,
    },
    isFeatured:{
        type: Boolean,
        default: false,
    },
    dataCreated: {
        type: Date,
        default: Date.now,
    },


})

exports.Product =mongoose.model('Product',productschema);