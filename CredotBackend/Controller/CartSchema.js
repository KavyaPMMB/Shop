
const mongoose =require("mongoose")

const cartschema=mongoose.Schema({
    brand:{type:String},
    model:{type:String},
    price:{type:Number},
    image:{type:String},
    quantity:{type:Number},
    total:{type:Number},





})
cartschema.virtual("grandtotal").get(function () {
    return this.total * this.quantity;
  });


const cartmodel=mongoose.model("cartmodel",cartschema)
module.exports=cartmodel