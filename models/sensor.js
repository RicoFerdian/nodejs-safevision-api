const mongoose = require("mongoose")
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const fieldSchema = mongoose.Schema({
    jenissensor:{
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