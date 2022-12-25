const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/profile')
    },
    filename:(req,file,cb)=>{
        const uniqueName = Date.now().toString()+'-'+Math.floor(Math.random()*1000)
     cb(null,file.fieldname+uniqueName+'.png')
    }
})
const upload = multer({storage:storage})
exports.uploadImage = async (req,res,next)=>{
    const uploads = upload.single('upload')
          uploads(req,res,(err)=>{
            if(err){
                   console.log(err)
            }else{
                next ()
            }
          })
}