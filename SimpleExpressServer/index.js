
import express from "express"
const app=express()
app.get("/home",(req,res)=>{
    res.send("this is home page")
})
app.get("/contactus",(req,res)=>{
    res.send("Contact us at contact@contact.com")
})
app.get("/about",(req,res)=>{
    res.send(
        {
            "name":"renj",
            "age":20
        }

        
    )
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})