const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const controllersProducts = require(path.resolve(__dirname, '../controllers/controllersProducts'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/pictures'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, 'picture' + uniqueSuffix + path.extname(file.originalname))
    }
  })
const upload = multer({ storage })

router.get('/products', controllersProducts.index);
router.get('/products/create', controllersProducts.create);
router.post('/products/create', upload.single('imagen'), controllersProducts.save);
router.get('/products/detail/:id', controllersProducts.show)

module.exports = router;