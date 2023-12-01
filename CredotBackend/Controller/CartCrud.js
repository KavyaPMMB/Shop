const cartmodel = require("./CartSchema");



const CreateCart=async(req,res)=>
{
    const {brand,model,price,image,quantity,total}=req.body
    const cartdetails=await cartmodel.create({
        brand,model,price,image,quantity,total
    })
    res.json(cartdetails)
}


const GetCart = async (req, res) => {
    try {
      const cartItems = await cartmodel.find().lean(); 
      
    
      const grandtotal = cartItems.reduce((sum, item) => sum + item.total * item.quantity, 0);
  
      res.json({
        cartItems,
        grandtotal,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const UpdateCart=async (req,res)=>
{
    const {brand,model,price,image,quantity,total,grandtotal}=req.body
    const _id=req.params.id
    const updateproduct1=await cartmodel.findByIdAndUpdate(_id,{brand,model,price,image,quantity,total,grandtotal})
    res.json(updateproduct1)
}

const DeleteCart=async(req,res)=>
{
    const _id=req.params.id
    const deletebook1=await cartmodel.findByIdAndDelete(_id)
    res.json("deleted")
}


const GetCartsingle=async (req,res)=>
{
    const _id=req.params.id
    const getcart3=await cartmodel.findById(_id)
    res.json(getcart3)
}



module.exports={CreateCart,GetCart,UpdateCart,GetCartsingle,DeleteCart}