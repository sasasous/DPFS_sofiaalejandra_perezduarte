const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const controllersUsers = require(path.resolve(__dirname, '../controllers/controllersUsers'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/profile'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, 'profile' + uniqueSuffix + path.extname(file.originalname))
    }
  })
const upload = multer({ storage })

router.get('/users', controllersUsers.index);
router.get('/users/create', controllersUsers.create);
router.post('/users/create', upload.single('imagen'), controllersUsers.save);
router.get('/users/detail/:id', controllersUsers.show)

module.exports = router;