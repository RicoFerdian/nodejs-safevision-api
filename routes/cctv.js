const express = require("express")
const bodyParser = require("body-parser")

let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const router = express.Router()

const cctvController = require("../controllers/cctv")

router.get("/getAllcctvs",cctvController.getAllcctvs)
router.post("/registerAcctv",urlencodedParser,cctvController.registerAcctv)

module.exports = router