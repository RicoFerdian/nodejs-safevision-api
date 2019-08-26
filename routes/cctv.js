const express = require('express')
const router = express.Router()
const cctvController = require('../controllers/cctv')
const verifyAuthorization = require('../middleware/verifyAuthorization')

// CRUD

// CREATE
router.post('/create', verifyAuthorization, cctvController.register)

// READ
router.get('/getAll', verifyAuthorization, cctvController.getAll)
router.get('/getById/:id', verifyAuthorization, cctvController.getById)
router.get('/getByUserId/:id', verifyAuthorization, cctvController.getByUserId)
router.get(
	'/getByUserName/:name',
	verifyAuthorization,
	cctvController.getByUserName
)
router.get(
	'/getByPemilik/:pemilik',
	verifyAuthorization,
	cctvController.getByPemilik
)

// UPDATE
router.patch('/updateById/:id', verifyAuthorization, cctvController.updateById)

// DELETE
router.delete('/deleteById/:id', verifyAuthorization, cctvController.deleteById)

module.exports = router
