const gallaryModel = require('../models/gallary.model')
const USER = require('../models/user.model')
exports.addImageInGallary = async (req,res)=>{
    const id=req.params.id
   const data = []
    if(!req.files){
          return res.status(400).send({
            message:"Bad Request ! Image required ."
          })
    }else{
        req.files.forEach(file => {
              const path = file.destination+'/'+file.filename
              data.push({imagesPath:path})
        });
    }
    try {
        const images = await gallaryModel.create(data)
        const user = await  USER.findOne({_id:id})
        images.forEach(img=>{
             user.photoId.push(img._id)
        })
        await user.save()
        return res.status(201).send({
            message:"images add sucessfully!",
            Photos:images
        })
    }catch(err){
        console.log(err.message)
        return res.status(500).send({
            message:"internal server error!"
        })
    }
}

exports.filterImages = async (req,res)=>{
        const  reqData = {}
        if(req.query.userId){
            reqData.userId = req.query.userId
        }
        if(req.query.id){
            reqData._id = req.query.id
        }
        try {
            const images = await gallaryModel.find(reqData);
            return res.status(200).send({
                Photos : images
            })
        }catch(err){
            console.log(err.message)
            return res.status(500).send({
                message:"internal server error!"
            })
        }
}