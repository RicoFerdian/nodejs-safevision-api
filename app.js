const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/trafficnet-security",{useCreateIndex: true,useNewUrlParser:true})

// router
const userRouter = require("./routes/user")
const cctvRouter = require("./routes/cctv")
const laporanRouter = require("./routes/laporan")

app.use(express.static(__dirname+"/public"))

app.use("/user",userRouter)
app.use("/laporan",laporanRouter)
app.use("/cctv",cctvRouter)

app.listen(3000,()=>{
    console.log("Server is running!")
})