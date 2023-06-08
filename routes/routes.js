const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({}, 'name price');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/', async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const product = new Product({
        name,
        price,
        description
      });
      await product.save();
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;

