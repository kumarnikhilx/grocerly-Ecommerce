const mongoose =require('mongoose');

const categorySchema =mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    images:[
        {
            type:String,
            required:true
        }
    ],
    color:{
        type:String,
        required:true
    }
})

categorySchema.virtual('id').get(function(){
    return this._id.toHexString();
});
categorySchema.set('toJSON',{
    virtuals: true,
});

exports.Category =mongoose.model('category', categorySchema);
exports.categorySchema =categorySchema;