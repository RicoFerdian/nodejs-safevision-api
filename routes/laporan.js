const express = require("express")
const bodyParser = require("body-parser")

// create
// getAll
// getById/:id
// updateById/:id
// deleteById/:id

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const laporanController = require("../controllers/laporan")

// READ
router.get("/getAll",laporanController.getAll)
router.get("/getById/:id",laporanController.getById) 
router.get("/getByUserId/:id",laporanController.getByUserId) 
router.get("/getByUserName/:name",laporanController.getByUserName)
router.get("/getByPemilik",laporanController.getByPemilik)

// UPDATE
router.patch("/updateById/:id",urlencodedParser,laporanController.updateById)

// CREATE
router.post("/create",urlencodedParser,laporanController.register)

// DELETE
router.delete("/delete/:id",laporanController.deleteById)

module.exports = router