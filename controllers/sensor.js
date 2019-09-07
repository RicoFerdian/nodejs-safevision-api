let sensor = require('../models/sensor')
let user = require('../models/user')
// router.get("/getAllSensors",userController.getAllUsers)
// router.get("/getSensorById/:id",userController.getAllUsers)
// router.get("/getAllSensorsByUser/:name",userController.registerAUser)

function execution(err, doc, res) {
    if (err) {
        res.send({
            message: err
        })
    } else {
        if (doc) res.send(doc)
        else res.send({ message: 'Unauthorized user' })
    }
}

async function getUsername(id) {
    const { username } = await user
        .findById(id)
        .select('username')
        .exec()

    return username
}

exports.getAllSensors = (req, res) => {
    sensor
        .find((err, doc) => {
            execution(err, doc, res)
        })
        .select('data jenis status username long lat')
}

exports.register = (req, res) => {
    sensor.create(req.body, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.getSensorById = (req, res) => {
    sensor.findById(req.params.id, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.setSensorById = async (req, res) => {
    const username = await getUsername(req.userId)
    sensor.findOneAndUpdate(
        { _id: req.params.id, username },
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
                if (doc) res.redirect('/sensor/getById/' + req.params.id)
                else res.send({ message: 'Unauthorized user' })
            }
        }
    )
}

exports.deleteSensorById = async (req, res) => {
    const username = await getUsername(req.userId)
    sensor.findOneAndDelete({ _id: req.params.id, username }, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.updateById = async (req, res) => {
    const username = await getUsername(req.userId)
    sensor.findOneAndUpdate(
        { _id: req.params.id, username },
        req.body,
        {
            new: true
        },
        (err, doc) => {
            execution(err, doc, res)
        }
    )
}
