
import express from "express"
import { readFileSync ,writeFileSync} from "fs"
const app=express()
app.use(express.json())
 function readData(){
    const Data=readFileSync("db.json","utf-8")
    return JSON.parse(Data)
    
 }
 function writeData(Data){
 writeFileSync("db.json",JSON.stringify(Data,null,2))
  
 }
 app.get("/students",(req,res)=>{
    const Data=readData()
    res.send(Data)
 })
 app.post("/students",(req,res)=>{
    const Data=readData()
    Data.push(req.body)
    writeData(Data)
    res.send("student added")

 })
 app.put("/students/:id",(req,res)=>{
    const Data=readData()
    const student=Data.find(u=>u.id==req.params.id)
    if(!student) return res.send("user not found")
    student.id=req.body.id
    writeData(Data)
    res.send("student updated")
 })
 app.delete("/students/:id",(req,res)=>{
   const Data=readData();
const newData=Data.filter(u=>u.id!=req.params.id) 
   writeData(newData)
   res.send("user deleted")
 })

 app.listen(3000,()=>{
    console.log("server is running https://localhost:3000")
 })
