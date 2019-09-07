const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const fieldSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true
	},
	password: String,
	subscription: {
		type: String,
		default: 'basic'
	},
	role: {
		type: String,
		required: true
	},
	cctvs: [ObjectId],
	sensors: [ObjectId]
})

let user = mongoose.model('user', fieldSchema)

module.exports = user
