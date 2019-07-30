const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const userController = require("../controllers/user")

router.get("/getAll",userController.getAllUsers)
router.get("/getByUserName/:name",userController.getByUserName)
router.get("/getById/:id",userController.getById)
router.patch("/updateById/:id",urlencodedParser,userController.updateById)
router.patch("/updateByUserName/:name",urlencodedParser,userController.updateByUserName)
router.delete("/deleteById/:id",userController.deleteById)
router.post("/create",urlencodedParser,userController.registerAUser)
router.post("/login",urlencodedParser,userController.loginUser)

module.exports = router