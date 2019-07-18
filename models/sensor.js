const mongoose = require("mongoose")

const fieldSchema = mongoose.Schema({
    jenisSensor:{
        type:String
    },
    status:{
        type:String
    },data:{
        type:Array
    },
    username:{
        type:String
    }

})

let sensor = mongoose.model("sensor",fieldSchema)

module.exports = sensor