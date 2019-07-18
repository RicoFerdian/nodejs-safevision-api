const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const laporanController = require("../controllers/user")

router.get("/get",laporanController.getAll)
router.get("/getById/:id",laporanController.getById)
router.get("/getByUserId/:id",laporanController.getByUserId)
router.get("/getByUserName/:name",laporanController.getByUserName)
router.get("/getByPemilik",laporanController.getByPemilik)
router.patch("/updateById/:id",urlencodedParser,laporanController.updateById)
router.post("/create",urlencodedParser,laporanController.register)

module.exports = router