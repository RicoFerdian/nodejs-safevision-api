const express = require('express')
const verifyAuthorization = require('../middleware/verifyAuthorization')
// create
// getAll
// getById/:id
// updateById/:id
// deleteById/:id

const router = express.Router()

const laporanController = require('../controllers/laporan')

// READ
router.get('/getAll', verifyAuthorization, laporanController.getAll)
router.get('/getById/:id', verifyAuthorization, laporanController.getById)
router.get(
	'/getByUserId/:id',
	verifyAuthorization,
	laporanController.getByUserId
)
router.get(
	'/getByUserName/:name',
	verifyAuthorization,
	laporanController.getByUserName
)
router.get('/getByPemilik', verifyAuthorization, laporanController.getByPemilik)

// UPDATE
router.patch(
	'/updateById/:id',
	verifyAuthorization,
	laporanController.updateById
)

// CREATE
router.post('/create', verifyAuthorization, laporanController.register)

// DELETE
router.delete(
	'/deleteById/:id',
	verifyAuthorization,
	laporanController.deleteById
)

module.exports = router
