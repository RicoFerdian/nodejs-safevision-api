const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/trafficnet-security",{useCreateIndex: true,useNewUrlParser:true})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// router
const userRouter = require("./routes/user")
const cctvRouter = require("./routes/cctv")
const laporanRouter = require("./routes/laporan")
const sensorRouter = require("./routes/sensor")

app.use(express.static(__dirname+"/public"))

// app.use("/",(req,res,next)=>{
//     res.status(404).send({
//         message:"Page not found",
//         status:404
//     })
//     next()
// })
app.use("/user",userRouter)
app.use("/laporan",laporanRouter)
app.use("/cctv",cctvRouter)
app.use("/sensor",sensorRouter)

app.listen(3000,()=>{
    console.log("Server is running!")
})