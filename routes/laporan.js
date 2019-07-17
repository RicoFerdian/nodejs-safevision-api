const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const userController = require("../controllers/user")

router.get("/getAllUsers",userController.getAllUsers)
router.post("/registerAUser",urlencodedParser,userController.registerAUser)

module.exports = router