const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    photoId:{
       type:[mongoose.SchemaType.ObjectId],
       ref:"gallary"
    },
    createdAt:{
        type:String,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    },
    updatedAt:{
        type:String,
        default:()=>{
            return Date.now()
        }
    }
});
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;