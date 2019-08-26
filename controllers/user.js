const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let user = require('../models/user')
const config = require('../config')

// router.get("/get",userController.getAllUsers) *
// router.get("/getByUserName",userController.getByUserName) *
// router.get("/getById",userController.getById) *
// router.patch("/updateById",userController.updateById) *
// router.patch("/updateByUserName",userController.updateByUserName) *
// router.post("/register",urlencodedParser,userController.registerAUser) *

exports.getByUserName = (req, res) => {
    user.find({ username: req.params.name }, (err, doc) => {
        if (err) {
            res.send({
                error: err
            })
        } else {
            res.send({
                message: 'Success',
                data: doc
            })
        }
    })
}

exports.updateById = (req, res) => {
    user.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, doc) => {
            if (err) {
                res.send({
                    error: err
                })
            } else {
                res.send({
                    message: 'Success',
                    data: doc
                })
            }
        }
    )
}

exports.getById = (req, res) => {
    user.findById(req.params.id, (err, doc) => {
        if (err) {
            res.send({
                error: err
            })
        } else {
            const { _id, username, email, subscription } = doc
            res.send({
                message: 'Success',
                data: {
                    _id,
                    username,
                    email,
                    subscription
                }
            })
        }
    })
}

exports.getLoggedIn = (req, res) => {
    user.findById(req.userId, (err, doc) => {
        if (err) {
            res.send({
                error: err
            })
        } else {
            const { _id, username, email, subscription } = doc
            res.send({
                message: 'Success',
                data: {
                    _id,
                    username,
                    email,
                    subscription
                }
            })
        }
    })
}

exports.updateLoggedIn = (req, res) => {
    user.findByIdAndUpdate(req.userId, req.body, { new: true }, (err, doc) => {
        if (err) {
            res.send({
                error: err
            })
        } else {
            res.send({
                message: 'Success',
                data: doc
            })
        }
    })
}

exports.updateByUserName = (req, res) => {
    user.findOneAndUpdate(
        req.params.name,
        req.body,
        { new: true },
        (err, doc) => {
            if (err) {
                res.send({
                    error: err
                })
            } else {
                res.send({
                    message: 'Success',
                    data: doc
                })
            }
        }
    )
}

exports.getAllUsers = (req, res) => {
    user.find((err, doc) => {
        if (err) {
            res.send({
                message: err
            })
        } else {
            res.send(doc)
        }
    })
}

exports.deleteById = (req, res) => {
    user.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) {
            res.send({
                message: err
            })
        } else {
            res.send(doc)
        }
    })
}

exports.registerAUser = (req, res) => {
    const { email, username, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 8)

    user.create(
        {
            username,
            email,
            password: hashedPassword
        },
        (err, doc) => {
            if (err) {
                res.status(500).send({
                    message: err
                })
            } else {
                res.status(200).send({
                    message: 'success'
                })
            }
        }
    )
}

exports.loginUser = (req, res) => {
    user.findOne(
        {
            email: req.body.email
        },
        function(err, userData) {
            if (err) return res.status(500).send('Internal server error.')
            if (!userData) return res.status(404).send('User not found.')

            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                userData.password
            )

            if (!passwordIsValid)
                return res.status(401).send('Invalid credentials.')

            const token = jwt.sign({ id: userData._id }, config.secret, {
                expiresIn: 86400
            })

            res.status(200).send({
                message: 'Success',
                token
            })
        }
    )
}
