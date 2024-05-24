const express=require('express')
const sign=require('./Router/Sign')
const bodyParser=require('body-parser')
const mogoose=require('mongoose')
const cors=require('cors')
const Pitshop = require('./Router/Pitshop')
const app=express()
app.use(cors())

mogoose.connect('mongodb://127.0.0.1:27017/Findmy')

mogoose.connection.on("connected",()=>{
    console.log("mongoDB connted");
})



app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hi")
})


app.use('/sign',sign)
app.use('/pitshops',Pitshop)

app.listen(3404,()=>{
    console.log("server is runnig");
})