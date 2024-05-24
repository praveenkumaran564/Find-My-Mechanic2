const express=require('express')
const pitModule = require('../Module/Pitmodule')


const router=express.Router()

router.get('/',(req,res)=>{
    res.send("done page")
})

router.post('/post',(req,res)=>{
    const newPit=pitModule(req.body)
    newPit.save()
    .then(response=>console.log(response))
    res.send("posted")
})
router.get('/get',(req,res)=>{
    pitModule.find().then(response=>res.send(response)).catch(err=>console.log(err))
})


module.exports=router;