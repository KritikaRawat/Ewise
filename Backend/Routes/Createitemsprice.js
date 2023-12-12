const express = require('express');
const router = express.Router();
const Itemsprice = require('../models/Itemsprice');

router.post("/createprice", async (req, res) => {
  try {
    const { name, price, email } = req.body;

    await Itemsprice.create({
      name,
      price,
      email,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

router.get('/getprices', async (req, res) => {
  try {
    const prices = await Itemsprice.find({}, 'name price email');
    res.json({ success: true, prices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
