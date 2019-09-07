const express = require('express')
const router = express.Router()
const cctvController = require('../controllers/cctv')
const verifyAuthorization = require('../middleware/verifyAuthorization')
const verifySecurity = require('../middleware/verifySecurity')
const verifyResident = require('../middleware/verifyResident')

// Only accessible by resident
// CREATE
router.post(
	'/create',
	verifyAuthorization,
	verifyResident,
	cctvController.register
)

// UPDATE
router.patch(
	'/updateById/:id',
	verifyAuthorization,
	verifyResident,
	cctvController.updateById
)

router.get(
	'/getById/:id',
	verifyAuthorization,
	verifyResident,
	cctvController.getById
)

// DELETE
router.delete(
	'/deleteById/:id',
	verifyAuthorization,
	verifyResident,
	cctvController.deleteById
)

// Only accessible by security
// READ
router.get(
	'/getAll',
	verifyAuthorization,
	verifySecurity,
	cctvController.getAll
)

router.get(
	'/getByUserId/:id',
	verifyAuthorization,
	verifySecurity,
	cctvController.getByUserId
)
router.get(
	'/getByUserName/:name',
	verifyAuthorization,
	verifySecurity,
	cctvController.getByUserName
)
router.get(
	'/getByPemilik/:pemilik',
	verifyAuthorization,
	verifySecurity,
	cctvController.getByPemilik
)

module.exports = router
