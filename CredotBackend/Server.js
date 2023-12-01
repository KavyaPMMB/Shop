const express = require("express")
const cors=require("cors")

const connection = require("./Config/Connection")
const router = require("./Router/Route")
connection()

const app=express()
app.use(cors())
app.use(express.json())
app.use("/",router)





const port=4000
app.listen(port,console.log(`server is running on port ${port}`))