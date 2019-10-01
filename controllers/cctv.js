const multer = require('multer')
let cctv = require('../models/cctv')
let user = require('../models/user')
let capture = require('../models/capture')

// router.get("/get",cctvController.getAll)
// router.get("/get/:id",cctvController.getById)
// router.get("/getByUser/:id",cctvController.getByUserId)
// router.post("/create",urlencodedParser,cctvController.register)

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

const storageTransfer = multer.diskStorage({
	destination: function(req, file, cb) {
                cb(null, 'uploads/camera_captures')
	},
	filename: function(req, file, cb) {
		const splitName = file.originalname.split('.')
		const extension = '.' + splitName[splitName.length - 1]
		cb(null, 'capture' + '-' + Date.now() + extension)
	}
})

exports.upload = multer({
	storage: storageTransfer
})

async function getUsername(id) {
    const { username } = await user
        .findById(id)
        .select('username')
        .exec()

    return username
}

exports.getAll = (req, res) => {
    cctv.find((err, doc) => {
        execution(err, doc, res)
    }).select('ipcam username long lat pemilik')
}

exports.getByUserId = (req, res) => {
    cctv.findById(req.params.id, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.getByUserName = (req, res) => {
    cctv.find({ username: req.params.name }, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.getByPemilik = (req, res) => {
    cctv.find({ pemilik: req.params.name }, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.getById = (req, res) => {
    cctv.findById(req.params.id, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.updateById = async (req, res) => {
    const username = await getUsername(req.userId)

    cctv.findOneAndUpdate(
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

exports.register = (req, res) => {
    cctv.create(req.body, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.deleteById = async (req, res) => {
    const username = await getUsername(req.userId)
    cctv.findOneAndDelete({ _id: req.params.id, username }, (err, doc) => {
        execution(err, doc, res)
    })
}

exports.uploadImage = (req, res) => {
  if (req.file) {
    const data = {
      idCctv: req.body.idCctv,
      capture: req.file.path.split('/')[2],
      timestamp: req.body.timestamp
    }
    capture.create(data, (err, doc) => {
      execution(err, doc, res)
    })
  } else throw 'error'
}
