const express =require("express")
const { createshoe, getshoes, getshoesingle, Deleteshoe } = require("../Controller/Shoecrud")
const { createbag, getbags, getbagsingle, DeleteBag } = require("../Controller/Bagcrud")
const { createwatch, getwatches, getwatchsingle, Deletewatch } = require("../Controller/Watchcrud")
const { CreateCart, GetCart, GetCartsingle, UpdateCart, DeleteCart } = require("../Controller/CartCrud")

const router=express.Router()

router.route("/addshoe").post(createshoe)
router.route("/getshoe").get(getshoes)


router.route("/addbag").post(createbag)
router.route("/getbag").get(getbags)


router.route("/addwatch").post(createwatch)
router.route("/getwatch").get(getwatches)
router.route("/getbagsingle/:id").post(getbagsingle)
router.route("/getshoesingle/:id").post(getshoesingle)
router.route("/getwatchsingle/:id").post(getwatchsingle)

router.route("/deletebagsingle/:id").delete(DeleteBag)
router.route("/deleteshoesingle/:id").delete(Deleteshoe)
router.route("/deletewatchsingle/:id").delete(Deletewatch)



//cart
router.route("/addtocart").post(CreateCart)
router.route("/getcart").get(GetCart)
router.route("/getcartsingle/:id").get(GetCartsingle)
router.route("/updatecart/:id").put(UpdateCart)
router.route("/deletecart/:id").delete(DeleteCart)




module.exports=router