const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const sensorController = require("../controllers/sensor")

router.get("/getAllSensors",sensorController.getAllSensors)
router.get("/getSensorById/:id",sensorController.getSensorById)

router.patch("/updateSensorById/:id",urlencodedParser,sensorController.updateById)
router.delete("/deleteSensorById/:id",sensorController.deleteSensorById)

router.post("/registerSensor",urlencodedParser,sensorController.register)

module.exports = router