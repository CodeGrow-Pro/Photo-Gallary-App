const mongoose = require('mongoose');
const gallarySchema = new mongoose.Schema({
    imagesPath:{
        type:String,
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    },
    createdAt:{
        type:String,
        default:()=>{
            return Date.now()
        },
        immutable:true
    },
    updatedAt:{
        type:String,
        default:()=>{
            return Date.now()
        },
    }
})
const gallaryModel = mongoose.model('gallary',gallarySchema);
module.exports = gallaryModel;