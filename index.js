const express  = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/api/index')
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.get('/',(req,res)=>{
    return res.status(200).send({
        message : "Welcome your Gallary!"
    })
})
app.use('/gallary',routers)
module.exports = app;