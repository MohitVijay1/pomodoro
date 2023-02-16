const mongoose=require('mongoose')
const projectSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"]
    }
    ,phone:{
        type:Number,
        required:[true,"please enter your number"]
    }
    ,email:{
        type:String,
        required:[true,"please enter your email"]
    }
    

},{
    timestamps:true
})
const Product=mongoose.model('Product',projectSchema)
module.exports=Product