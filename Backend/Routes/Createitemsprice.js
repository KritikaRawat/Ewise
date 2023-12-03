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

router.get('/getprices', async (req, res) => {
    try {
      const prices = await Itemsprice.find({}, 'name price'); // Retrieve only 'name' and 'price' fields
      res.json({ success: true, prices });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  });
  


module.exports = router;
