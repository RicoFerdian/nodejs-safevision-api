const mongoose = require("mongoose")

const fieldSchema = mongoose.Schema({
    jenislaporan:{
        type:String
    },
    lokasi:{
        type:String
    },
    ipcam:String,
    catatan:String,
    bukti:String,
    iduser:String
})

let laporan = mongoose.model("laporan",fieldSchema)

module.exports = laporan