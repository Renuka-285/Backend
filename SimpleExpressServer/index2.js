import express from "express"
import os from "os"
import dns from "dns"
import {readData} from "./read.js"
const app=express()
app.use(express.json())
app.get("/test",(req,res)=>{
    res.send("test route is working")
})
app.get("/readfile",(req,res)=>{
    const data=readData()
    res.send(data)
})
app.get("/systemdetails",(req,res)=>{
    const systemDetails={
        platform:os.platform(),
        totalmemoryGB:os.totalmem(),
        FreeMemoryGB:os.freemem(),
        CPUmodel:os.cpus().CPUmodel
        
    }
    res.json(systemDetails)
})
app.get("/gettip",(req,res)=>{
    dns.lookup("masaischool.com",(err,address)=>{
        if(err){
            res.json({error:"error"})
        }
        else{
            res.json({hostname:"masaischool.com",ipAddress:address})
        }
    })
})
app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})

