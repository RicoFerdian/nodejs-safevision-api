const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')

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

const Sensor = require('./models/sensor')
const User = require('./models/user')

app.use(express.static(__dirname + '/public'))

// app.use("/",(req,res,next)=>{
//     res.status(404).send({
//         message:"Page not found",
//         status:404
//     })
//     next()
// })

app.use("/user", userRouter)
app.use("/laporan", laporanRouter)
app.use("/cctv", cctvRouter)
app.use("/sensor", sensorRouter)
app.get("/test", () => "hello")

async function fetchSensor() {
  return (await Sensor.find()).reduce((acc, sensor) => {
    acc[sensor._id] = sensor
    return acc
  }, {})
}

io.on('connection', async function(socket) {
  let sensors = await fetchSensor()
  socket.emit('api_push', 'Hello from express')
  socket.on('sensor_1_push', async function(msg) {
    if (sensors[msg.id].status != msg.door) {
      socket.emit('api_push', 'update db')
      await Sensor.findByIdAndUpdate(msg.id, { $set: {
        status: msg.door.toString()
      }})
      sensors = await fetchSensor()
    }
    //socket.emit('api_push', 'Server send back : '+JSON.stringify(sensors[msg.id]))
  })

  socket.on('web_client_request', async (data) => {
    //const { id } = data
    //const user = await User.findById(id)
    jwt.verify(data.token, config.secret, async (err, decoded) => {
      if (!err) {
        userId = decoded.id
        userRole = decoded.role
        if (userRole === 'security') {
          socket.emit('api_data_push', await Sensor.find())
        } else {
          const user = await User.findById(userId)
          socket.emit('api_data_push', await Sensor.find({ username: user.username }))
        }
      }
    })
  })
})

http.listen(6500, () => {
    console.log("Server is running!")
})
