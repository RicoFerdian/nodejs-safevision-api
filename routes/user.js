const express = require('express')
const verifyAuthorization = require('../middleware/verifyAuthorization')

const router = express.Router()
const userController = require('../controllers/user')

router.get('/getAll', verifyAuthorization, userController.getAllUsers)
router.get('/getByUserName/:name', userController.getByUserName)
router.get('/getById/:id', verifyAuthorization, userController.getById)
router.get('/getLoggedIn', verifyAuthorization, userController.getLoggedIn)
router.patch(
	'/updateLoggedIn',
	verifyAuthorization,
	userController.updateLoggedIn
)
router.patch('/updateById/:id', verifyAuthorization, userController.updateById)
router.patch('/updateByUserName/:name', userController.updateByUserName)
router.delete('/deleteById/:id', verifyAuthorization, userController.deleteById)
router.post('/create', userController.registerAUser)
router.post('/login', userController.loginUser)

module.exports = router
