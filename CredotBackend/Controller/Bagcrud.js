const bagmodel = require("./Bagpackschema")

const createbag=async(req,res)=>{
    const {brand,model,description,price,image}=req.body
    const addbag= await bagmodel.create({brand,model,description,price,image})
    res.json(addbag)

}

const getbags=async(req,res)=>{
    const getbag=await bagmodel.find()
    res.json(getbag)


}


const getbagsingle=async(req,res)=>
{
    const _id=req.params.id
    const getform=await bagmodel.findById(_id)
    res.json(getform)
}
const DeleteBag=async(req,res)=>{
    const _id=req.params.id
    const deleteclient=await bagmodel.findByIdAndDelete(_id)
    res.json("deleted")
}



module.exports={createbag,getbags,getbagsingle,DeleteBag}