const express= require('express')
const app= express()
const path= require('path')
const userRouter= require('./app/router/user.Router')
app.use(express.static(path.resolve('views')))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.use('/user',userRouter)


module.exports=app
