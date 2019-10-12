const express = require('express')
const verifyAuthorization = require('../middleware/verifyAuthorization')
const verifySecurity = require('../middleware/verifySecurity')

const router = express.Router()
const userController = require('../controllers/user')

// Accessible by unlogged in user
router.post('/create', userController.registerAUser)
router.post('/login/security', userController.loginSecurity)
router.post('/login/resident', userController.loginResident)

// Accessible by logged in user
router.get('/getById/:id', verifyAuthorization, userController.getById)
router.get('/getLoggedIn', verifyAuthorization, userController.getLoggedIn)
router.patch(
	'/updateLoggedIn',
	verifyAuthorization,
	userController.updateLoggedIn
)
router.patch('/updateById/:id', verifyAuthorization, userController.updateById)
router.patch(
	'/updateByUserName/:name',
	verifyAuthorization,
	userController.updateByUserName
)
router.patch('/updatePassword', verifyAuthorization, userController.updatePassword)

// Only accessible by security
router.get(
	'/getAll',
	verifyAuthorization,
	verifySecurity,
	userController.getAllUsers
)

router.delete(
	'/deleteById/:id',
	verifyAuthorization,
	verifySecurity,
	userController.deleteById
)

router.post(
	'/addresident',
	verifyAuthorization,
	verifySecurity,
	userController.addResident
)

module.exports = router
