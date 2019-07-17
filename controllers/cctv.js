let cctv = require("../models/cctv")

exports.getAllcctvs = (req,res) =>{
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

exports.registerAcctv = (req,res) =>{
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