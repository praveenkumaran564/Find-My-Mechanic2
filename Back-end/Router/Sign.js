const express=require('express')
const SignModule = require('../Module/Signmodule')


const router=express.Router()

router.get('/',(req,res)=>{
    res.send("sign page")
})

router.post('/post',(req,res)=>{
    const newSign=SignModule(req.body)
    newSign.save()
    .then(response=>console.log(response))
    res.send("posted")
})
router.get('/get',(req,res)=>{
    SignModule.find().then(response=>res.send(response)).catch(err=>console.log(err))
})


module.exports=router;