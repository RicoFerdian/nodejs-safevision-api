let laporan = require("../models/laporan")

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
    laporan.find((err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getByUserId = (req,res) =>{
    laporan.findById(req.params.id,(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getByUserName = (req,res) =>{
    laporan.find({username:req.params.name},(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getByPemilik = (req,res) =>{
    laporan.find({pemilik:req.params.name},(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.getById = (req,res) =>{
    laporan.findById(req.params.id,(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.updateById = (req,res) =>{
    laporan.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    },(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.deleteById = (req,res) =>{
    laporan.findByIdAndDelete(req.params.id,(err,doc)=>{
        excecution(err,doc,res)
    })
}

exports.register = (req,res) =>{
    laporan.create(req.body,(err,doc)=>{
        excecution(err,doc,res)
    })
}