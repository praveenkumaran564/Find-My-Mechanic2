const mongoose=require('mongoose')

const signSchema=mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String
})

const SignModule=mongoose.model('userSignin',signSchema)

module.exports=SignModule