const express = require('express');
const Router = express.Router(); 

const Test =require('../model/Test');

//all the posts here

Router.get("/",(req,res)=>{
    res.send("welcome to the post")
})

//save the post
Router.post('/',(req,res)=>{
const test = new Test({
    title:req.body.title,
    description:req.body.description
})
test
.save().then((data)=>{
    res.json.data
}).catch((err)=>{
    res.json({message:err})
})
})


module.exports = Router;
