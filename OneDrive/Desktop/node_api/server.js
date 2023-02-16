const express = require('express')
const mongoose= require('mongoose')
const Product=require('./models/projectModel')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/user',async(req,res)=>{
    
    try{
        const products=await Product.find({})
        console.log(products)
        res.status(200).json(products)
     
         }
         catch(error){
             console.log(error.message)
             res.status(500).json({message:error.message})
         }
})
app.post('/user',async(req,res)=>{
    try{
   const product=await Product.create(req.body)
   res.status(200).json(product)

    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})
mongoose.set('strictQuery', true)
mongoose
.connect('mongodb+srv://admin:JgFbtPtiMrSJRm7k@crudapi.imqrdsu.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server started")
    })
}).catch(()=>{
    console.log(err)
})
// JgFbtPtiMrSJRm7k