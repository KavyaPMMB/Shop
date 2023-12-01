
const mongoose =require("mongoose")

const shoeschema=mongoose.Schema({
    brand:{type:String},
    model:{type:String},
    description:{type:String},
    price:{type:Number},
    image:{type:String}




})


const shoemodel=mongoose.model("shoemodel",shoeschema)
module.exports=shoemodel