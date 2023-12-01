const mongoose = require("mongoose")
const bagschema=mongoose.Schema({
    brand:{type:String},
    model:{type:String},
    description:{type:String},
    price:{type:Number},
    image:{type:String}


})

const bagmodel=mongoose.model("bagmodel",bagschema)
module.exports=bagmodel