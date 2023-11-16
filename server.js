const express=require("express");
const app=express();
const path=require("path");

app.get("/i",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/p",(req,res)=>{
    res.sendFile(path.join(__dirname,"catalog.html"));
})

app.get("/c",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"));
})

app.listen(2345,()=>{
    console.log("server running");
})