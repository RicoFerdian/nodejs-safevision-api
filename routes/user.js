const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const userController = require("../controllers/user")

router.get("/getAllUsers",userController.getAllUsers)
router.get("/getByUserName/:name",userController.getByUserName)
router.get("/getById/:id",userController.getById)
router.patch("/updateById/:id",urlencodedParser,userController.updateById)
router.patch("/updateByUserName/:name",urlencodedParser,userController.updateByUserName)
router.post("/register",urlencodedParser,userController.registerAUser)

module.exports = router