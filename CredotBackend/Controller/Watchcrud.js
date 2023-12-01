const watchmodel = require("./Watchschema")

const createwatch=async(req,res)=>{
    const{brand,model,description,price,image}=req.body
    const addwatch=await watchmodel.create({brand,model,description,price,image})
    res.json(addwatch)

}

const getwatches=async(req,res)=>{
    const getwatchh=await watchmodel.find()
    res.json(getwatchh)

}

const getwatchsingle=async(req,res)=>
{
    const _id=req.params.id
    const getform=await watchmodel.findById(_id)
    res.json(getform)
}

const Deletewatch = async (req, res) => {
    const _id = req.params.id;
    try {
        const deleteWatch = await watchmodel.findByIdAndDelete(_id);
        if (!deleteWatch) {
            return res.status(404).json({ error: 'Watch not found' });
        }
        res.json({ message: 'Watch deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




module.exports={createwatch,getwatches,getwatchsingle,Deletewatch}