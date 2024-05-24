const mongoose=require('mongoose')

const pitSchema=mongoose.Schema({
    location:String,
    contact:Number,
    expert:String
    
})
const PitModule=mongoose.model('/pitshops',pitSchema)

module.exports=PitModule