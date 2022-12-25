const userModel = require('../models/user.model');
const multer = require('multer');
exports.register = async (req, res) => {
    const body = req.body;
    const data = {
        name: body.name,
        email: body.email,
        password: body.password,
    }
    if(req.file){
        data.image=req.file.destination+'/'+req.file.filename
    }
    try {
        const user = await userModel.create(data);
        return res.status(200).send({
            message:"user register successfully!",
            created_user:user
        })
    }catch(err){
        console.log(err.message)
        return res.status(500).send({
            message:"internal server error!"
        })
    }
}
exports.filter = async (req,res)=>{
    try{
        const data = await userModel.find();
        return res.status(200).send({
            users :data
        })
    }catch(err){
        return res.status(500).send({
            message:"internal server error!"
        })
    }
}