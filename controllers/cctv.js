let cctv = require("../models/cctv")

// router.get("/get",cctvController.getAll)
// router.get("/get/:id",cctvController.getById)
// router.get("/getByUser/:id",cctvController.getByUserId)
// router.post("/create",urlencodedParser,cctvController.register)

exports.getAll = (req,res) =>{
    cctv.find((err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.getByUserId = (req,res) =>{
    cctv.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.getByUserName = (req,res) =>{
    cctv.find({username:req.params.name},(err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.getById = (req,res) =>{
    cctv.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.register = (req,res) =>{
    cctv.create(req.body,(err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send({
                data:doc,
                message:"success"
            })
        }
    })
}