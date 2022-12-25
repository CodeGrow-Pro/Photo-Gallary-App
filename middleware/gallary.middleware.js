const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads/gallary')
    },
    filename:(req,file,callback)=>{
        const uniqueName = Date.now().toString()+'-'+Math.floor(Math.random()*10000)+'.png'
        callback(null,uniqueName)
    }
})
const upload = multer({storage:storage})
exports.multiImageUpload   = (req,res,next)=>{
    const uploads = upload.array('images')
    uploads(req,res,(err)=>{
        if(err){
            return res.status(500).send({
                message:"internal server error In Image Uploading Try after some time."
            })
        }else{
            next()
        }
    })
}