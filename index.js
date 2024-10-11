const express=require("express");
const app=express();

const port=3000;

const path=require("path");


app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/ig/:username/:id/:age",(req,res)=>{
    let data=req.params;
    console.log(data);
    let {username,id}=req.params;
    console.log(username,id);

    let followers=["aman","raman","mohan","sohan","rajiv"]
    res.render("insta.ejs",{data,followers})
})


app.get("/ludo",(req,res)=>{
    let number=Math.floor(Math.random()*6+1);
    res.render("dice.ejs",{number})
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.listen(port,()=>{
    console.log("its listen")
})


// app.get("/",(req,res)=>{
//     res.send("its woriking");
// })




app.get("/im/:name",(req,res)=>{
    let data=require("./data.json");
    console.log(data);
})

