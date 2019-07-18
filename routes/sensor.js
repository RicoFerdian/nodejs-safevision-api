const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const sensorController = require("../controllers/sensor")

// READ
router.get("/getAll",sensorController.getAllSensors)
router.get("/getById/:id",sensorController.getSensorById)

// UPDATE
router.patch("/updateById/:id",urlencodedParser,sensorController.updateById)

//  DELETE
router.delete("/deleteById/:id",sensorController.deleteSensorById)

// CREATE
router.post("/create",urlencodedParser,sensorController.register)

module.exports = router