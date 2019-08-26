const express = require('express')
const verifyAuthorization = require('../middleware/verifyAuthorization')
const router = express.Router()
const sensorController = require('../controllers/sensor')

// READ
router.get('/getAll', verifyAuthorization, sensorController.getAllSensors)
router.get('/getById/:id', verifyAuthorization, sensorController.getSensorById)

// UPDATE
router.patch(
	'/updateById/:id',
	verifyAuthorization,
	sensorController.updateById
)
router.get(
	'/setById/:id/:status',
	verifyAuthorization,
	sensorController.setSensorById
)

//  DELETE
router.delete(
	'/deleteById/:id',
	verifyAuthorization,
	sensorController.deleteSensorById
)

// CREATE
router.post('/create', verifyAuthorization, sensorController.register)

module.exports = router
