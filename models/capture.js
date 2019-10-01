const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fieldSchema = Schema({
  idCctv: {
    type: Schema.ObjectId
  },
  capture: {
    type: String
  },
  timestamp: {
    type: Date
  }
})

let capture = mongoose.model('capture', fieldSchema)

module.exports = capture
