const express = require('express');
const router = express.Router();
const path = require('path');
const controllersUsers = require
(path.resolve(__dirname, '../controllers/controllersUsers'));

router.get('/users', controllersUsers.index);

module.exports = router;