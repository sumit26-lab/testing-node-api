const userRouter= require('express').Router()

const {getUser}= require('../controler/userControler.js')
userRouter.get("/",getUser)

module.exports=userRouter