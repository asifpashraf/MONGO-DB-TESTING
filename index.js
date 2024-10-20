const express = require("express");
const index =express();
const mongoose =require("mongoose")
require('dotenv/config')

const bodyParser =require('body-parser')
//middle ware
index.use(bodyParser.json())
// index.use("/posts",()=>{console.log("my first middle ware");
// })

//Routes
const postRoute = require('./Routes/posts')
index.use("/posts",postRoute)

index.get('/',(req,res)=>{
    res.send("welcome asif");
});

//connecting the db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongo db connected")})
.catch(()=>{console.log("not connected")
})

//listeening port
index.listen(3000)