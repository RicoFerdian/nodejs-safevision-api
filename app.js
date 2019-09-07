const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/trafficnet-security', {
	useCreateIndex: true,
	useNewUrlParser: true
})
mongoose.connection.once('open', () => console.log('DB connected'))
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// router
const userRouter = require('./routes/user')
const cctvRouter = require('./routes/cctv')
const laporanRouter = require('./routes/laporan')
const sensorRouter = require('./routes/sensor')

app.use(express.static(__dirname + '/public'))

// app.use("/",(req,res,next)=>{
//     res.status(404).send({
//         message:"Page not found",
//         status:404
//     })
//     next()
// })

app.use('/user', userRouter)
app.use('/laporan', laporanRouter)
app.use('/cctv', cctvRouter)
app.use('/sensor', sensorRouter)

app.listen(3010, () => {
	console.log('Server is running!')
})
