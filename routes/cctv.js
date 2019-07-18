const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const cctvController = require("../controllers/cctv")

// CRUD

// CREATE
router.post("/create",urlencodedParser,cctvController.register)

// READ
router.get("/get",cctvController.getAll)
router.get("/getById/:id",cctvController.getById)
router.get("/getByUserId/:id",cctvController.getByUserId)
router.get("/getByUserName/:name",cctvController.getByUserName)
router.get("/getByPemilik/:pemilik",cctvController.getByPemilik)

// UPDATE
router.patch("/updateById/:id",urlencodedParser,cctvController.updateById)

// DELETE

module.exports = router