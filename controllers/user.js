let user = require("../models/user")

exports.getAllUsers = (req,res) =>{
    user.find((err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.registerAUser = (req,res) =>{
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

exports.updateUserById = (req,res) =>{
    user.updateUserById(req.params,(err,doc)=>{
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