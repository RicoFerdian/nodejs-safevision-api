let sensor = require('../models/sensor')
// router.get("/getAllSensors",userController.getAllUsers)
// router.get("/getSensorById/:id",userController.getAllUsers)
// router.get("/getAllSensorsByUser/:name",userController.registerAUser)

function excecution(err, doc, res) {
    if (err) {
        res.send({
            message: err
        })
    } else {
        res.send(doc)
    }
}

exports.getAllSensors = (req, res) => {
    sensor.find((err, doc) => {
        excecution(err, doc, res)
    })
}

exports.register = (req, res) => {
    sensor.create(req.body, (err, doc) => {
        excecution(err, doc, res)
    })
}

exports.getSensorById = (req, res) => {
    sensor.findById(req.params.id, (err, doc) => {
        excecution(err, doc, res)
    })
}

exports.setSensorById = (req, res) => {
    sensor.findByIdAndUpdate(
        req.params.id,
        { status: req.params.status },
        {
            new: true
        },
        (err, doc) => {
            if (err) {
                res.send({
                    message: err
                })
            } else {
                res.redirect('/sensor/getById/' + req.params.id)
            }
        }
    )
}

exports.deleteSensorById = (req, res) => {
    sensor.findByIdAndDelete(req.params.id, (err, doc) => {
        excecution(err, doc, res)
    })
}

exports.updateById = (req, res) => {
    sensor.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        },
        (err, doc) => {
            excecution(err, doc, res)
        }
    )
}
