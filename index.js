const express=require("express")
const https=require("https")
const fs=require("fs")
const helmet=require("helmet")

let app=express()

app.use(helmet())

app.get("/secret",(req,res)=>{
    res.send("secret is 42")
})

https.createServer({
    key:fs.readFileSync("./key.pem"),
    cert:fs.readFileSync("./cert.pem")
},app)

.listen(5000,()=>{
    console.log("server on running port 5000");
})