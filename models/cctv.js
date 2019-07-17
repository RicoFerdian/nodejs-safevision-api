const mongoose = require("mongoose")

const fieldSchema = mongoose.Schema({
    ipcam:{
        type:String
    },
    username:{
        type:String
    },
    long:String,
    lat:String,
    pemilik:String
})

let cctv = mongoose.model("cctv",fieldSchema)

module.exports = cctv