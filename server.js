var express = require("express");
const app = express();
app.use(express.json())

//var mongoose = require("mongoose");
const dict=[]

app.get("/", (req , res) =>  {
    console.log("Show")
    res.send(dict)
})

app.post("/", (req , res) => {
    console.log("user added")
    dict.push(req.body)
    res.send(dict)
    //res.status(201).send(req.body)
})

app.listen(8000)
