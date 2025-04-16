const express = require('express');
const router = express.Router();
const path = require('path');
const controllersProducts = require
(path.resolve(__dirname, '../controllers/controllersProducts'));

router.get('/products', controllersProducts.index);
router.get('/products/create', controllersProducts.create);

module.exports = router;