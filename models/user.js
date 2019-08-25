const mongoose = require('mongoose')

const fieldSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true
	},
	password: String
})

let user = mongoose.model('user', fieldSchema)

module.exports = user
