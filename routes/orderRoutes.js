
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/purchase', async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    const newOrder = new Order({ userId, bookId });
    await newOrder.save();
    res.status(201).json({ message: 'Purchase successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
