const mongoose = require('mongoose')

const fieldSchema = mongoose.Schema({
    _id: {
      type: String
    },
    jenis: {
        type: String
    },
    status: {
      type: String,
      default: "0"
    },
    data: {
        type: Array
    },
    username: {
        type: String
    },
    long: {
        type: String
    },
    lat: {
        type: String
    }
})

let sensor = mongoose.model('sensor', fieldSchema)

module.exports = sensor
