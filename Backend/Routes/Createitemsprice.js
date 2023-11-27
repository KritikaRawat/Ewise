const express = require('express')
const router = express.Router()
const Itemsprice = require('../models/Itemsprice')
// const { body, validationResult } = require('express-validator');

router.post("/createprice", async(req, res) =>{
 try{
  await Itemsprice.create({
   name:req.body.name,
   price:req.body.price
  })
 res.json({success:true});
 }catch(error){
  console.log(error)
  res.json({success:false});
 }
})

module.exports = router;
