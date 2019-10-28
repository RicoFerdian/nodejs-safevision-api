const express = require('express')
const verifyAuthorization = require('../middleware/verifyAuthorization')
const verifySecurity = require('../middleware/verifySecurity')
const verifyResident = require('../middleware/verifyResident')
const router = express.Router()
const sensorController = require('../controllers/sensor')

// Only accessible by resident
router.get(
	'/getById/:id',
	verifyAuthorization,
	verifyResident,
	sensorController.getSensorById
)
router.get(
  '/getByUsername',
  verifyAuthorization,
  verifyResident,
  sensorController.getSensorByUsername
)

// UPDATE
router.patch(
	'/updateById/:id',
	verifyAuthorization,
	verifyResident,
	sensorController.updateById
)

router.post(
	'/setById/:id/:status',
	verifyAuthorization,
	verifyResident,
	sensorController.setSensorById
)

//  DELETE
router.delete(
	'/deleteById/:id',
	verifyAuthorization,
	verifyResident,
	sensorController.deleteSensorById
)

// CREATE
router.post(
	'/create',
	verifyAuthorization,
	verifyResident,
	sensorController.register
)

// CREATE FOR SETTER
router.get(
	'/create-for-setter/:id',
	sensorController.registerIdOnly
)

// Only accessible by security
// READ
router.get(
	'/getAll',
	verifyAuthorization,
	verifySecurity,
	sensorController.getAllSensors
)

module.exports = router
