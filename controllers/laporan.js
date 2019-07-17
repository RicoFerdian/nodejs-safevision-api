let laporan = require("../models/laporan")

exports.getAllLaporans = (req,res) =>{
    laporan.find((err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.postALaporan = (req,res) =>{
    user.create(req.body,(err,doc)=>{
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