// In your backend server code (e.g., SellerUsers.js)
const express = require('express');
const router = express.Router();
const seller = require('../models/SellersData');

// Add a new route to fetch all sellers
router.get('/getsellers', async (req, res) => {
  try {
    const sellers = await seller.find({});
    res.json({ success: true, sellers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: "Failed to fetch sellers" });
  }
});

module.exports = router;
