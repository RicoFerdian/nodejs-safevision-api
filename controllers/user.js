let user = require("../models/user")

// router.get("/get",userController.getAllUsers) *
// router.get("/getByUserName",userController.getByUserName) *
// router.get("/getById",userController.getById) *
// router.patch("/updateById",userController.updateById) *
// router.patch("/updateByUserName",userController.updateByUserName) *
// router.post("/register",urlencodedParser,userController.registerAUser) *

exports.getByUserName = (req,res)=>{
    user.find({username:req.params.name},(err,doc)=>{
        if(err){
            res.send({
                error:err
            })
        }else{
            res.send({
                message:"Success",
                data:doc
            })
        }
    })
}

exports.updateById = (req,res)=>{
    user.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,doc)=>{
        if(err){
            res.send({
                error:err
            })
        }else{
            res.send({
                message:"Success",
                data:doc
            })
        }
    })
}

exports.getById = (req,res) =>{
    user.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send({
                error:err
            })
        }else{
            res.send({
                message:"Success",
                data:doc
            })
        }
    })
}

exports.updateByUserName = (req,res) =>{
    user.findOneAndUpdate(req.params.name,req.body,{new:true},(err,doc)=>{
        if(err){
            res.send({
                error:err
            })
        }else{
            res.send({
                message:"Success",
                data:doc
            })
        }
    })
}

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

exports.deleteById = (req,res) =>{
    user.findByIdAndDelete(req.params.id,(err,doc)=>{
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
