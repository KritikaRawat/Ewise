const express = require('express')
const router = express.Router()
const buyer = require('../models/BuyersData')
const { body, validationResult } = require('express-validator');


router.post("/createbuyer", 
[
    body("email").isEmail(),
    body("name").isLength({min: 5}),
    body("password", "Password too short").isLength({min: 5})]

,async(req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
  await buyer.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    PhoneNum:req.body.PhoneNum, 
  })
 res.json({success:true});
 }catch(error){
  console.log(Error)
  res.json({success:false});
 }
})

module.exports= router;

