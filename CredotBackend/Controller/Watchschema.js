const mongoose=require("mongoose")

const watchschemaa=mongoose.Schema({
    brand:{type:String},
    model:{type:String},
    description:{type:String},
    price:{type:Number},
    image:{type:String}

    
})

const watchmodel=mongoose.model("watchmodel",watchschemaa)
module.exports=watchmodel