const shoemodel = require("./Shoeschema")

const createshoe=async(req,res)=>{
    const {brand,model,description,price,image}=req.body

    const addshoe=await shoemodel.create({brand,model,description,price,image})

    res.json(addshoe)

}

const getshoes=async(req,res)=>{
    const getshoe=await shoemodel.find()
    res.json(getshoe)


}
const getshoesingle=async(req,res)=>
{
    const _id=req.params.id
    const getform=await shoemodel.findById(_id)
    res.json(getform)
}

const Deleteshoe=async(req,res)=>{
    const _id=req.params.id
    const deleteclient=await shoemodel.findByIdAndDelete(_id)
    res.json("deleted")
}


module.exports={createshoe,getshoes,getshoesingle,Deleteshoe}