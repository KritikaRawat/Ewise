// const express = require('express')
// const router = express.Router()
// const seller = require('../models/SellersData')
// const { body, validationResult } = require('express-validator');

// router.post("/createseller",[
//  body("email").isEmail(),
//  body("name").isLength({min: 5}),
//  body("password", "Password too short").isLength({min: 5})]
//  , async(req, res)=>{

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//  try{
//   await seller.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     sellerType: req.body.sellerType,
//     Address: req.body.Address,
//     mapLink: req.body.mapLink,
//     imglink: req.body.imglink,
//     PhoneNum:req.body.PhoneNum, 
//   }).then(res.json({success:true}));
//  }catch(error){
//   console.log(Error)
//   res.json({success:false});
//  }
// })


// router.post("/loginseller" ,[
//   body("email").isEmail(),
//   body("password", "Password too short").isLength({min: 5})], async(req, res)=>{
//   let email = req.body.email;

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try{
//    let sellerinfo = await seller.findOne({email});
//    if(!sellerinfo){
//     return res.status(400).json({ errors: "Try Logging with registered credentials" });
//    }

//    if(req.body.password !== sellerinfo.password){
//     return res.status(400).json({ errors: "Try Logging with registered credentials" });
//    }
//    return res.json({success:true});
//   }catch(error){
//    console.log(Error)
//    res.json({success:false});
//   }
//  })

// module.exports= router;

//------------------------------------------------------------------------
const express = require('express')
const router = express.Router()
const seller = require('../models/SellersData')
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const jwtSecret = "MynameisEwiseProject1234567"

router.post("/createseller",[
 body("email").isEmail(),
 body("name").isLength({min: 5}),
 body("password", "Password too short").isLength({min: 5})]
 , async(req, res)=>{

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

 try{
  await seller.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    sellerType: req.body.sellerType,
    Address: req.body.Address,
    mapLink: req.body.mapLink,
    imglink: req.body.imglink,
    PhoneNum:req.body.PhoneNum, 
  }).then(res.json({success:true}));
 }catch(error){
  console.log(Error)
  res.json({success:false});
 }
})


router.post("/loginseller" ,[
  body("email").isEmail(),
  body("password", "Password too short").isLength({min: 5})], async(req, res)=>{
  let email = req.body.email;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try{
   let sellerinfo = await seller.findOne({email});
   if(!sellerinfo){
    return res.status(400).json({ errors: "Try Logging with registered credentials" });
   }

   if(req.body.password !== sellerinfo.password){
    return res.status(400).json({ errors: "Try Logging with registered credentials" });
   }
  //  return res.json({success:true});

   const data = {
    seller:{
      id:sellerinfo.id
    }
   }

   const authToken = jwt.sign(data, jwtSecret);
   return res.json({success:true, authToken: authToken});
  }catch(error){
   console.log(Error)
   res.json({success:false});
  }
 })

module.exports= router;