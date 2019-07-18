let cctv = require("../models/cctv")

// router.get("/get",cctvController.getAll)
// router.get("/get/:id",cctvController.getById)
// router.get("/getByUser/:id",cctvController.getByUserId)
// router.post("/create",urlencodedParser,cctvController.register)

function excecution(err,doc,res){
    if(err){
        res.send({
            message:err
        })
    }else{
        res.send(doc)
    }
}

exports.getAll = (req,res) =>{
    cctv.find((err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getByUserId = (req,res) =>{
    cctv.findById(req.params.id,(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getByUserName = (req,res) =>{
    cctv.find({username:req.params.name},(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getByPemilik = (req,res) =>{
    cctv.find({pemilik:req.params.name},(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getById = (req,res) =>{
    cctv.findById(req.params.id,(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.updateById = (req,res) =>{
    cctv.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    },(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.register = (req,res) =>{
    cctv.create(req.body,(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.deleteById = (req,res) =>{
    cctv.deleteOne(req.params.id,(err,doc)=>{
        excecution(err,doc,res)
    })
}