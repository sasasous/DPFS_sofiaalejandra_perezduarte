const express = require('express');
const router = express.Router();
const path = require('path');
const controllersHome = require
(path.resolve(__dirname, 'controllers', controllersHome));

router.get('/home', controllersHome.index);

module.exports = router;