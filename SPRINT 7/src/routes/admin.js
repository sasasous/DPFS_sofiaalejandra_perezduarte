const express = require('express');
const router = express.Router();
const path = require('path');
const controllersAdmin = require(path.resolve(__dirname, 'controllers', controllersAdmin));

router.get('/administrar', controllersAdmin.index);

module.exports = router;