//Módulo express
let express = require('express');

//Método Router de express
let router = express.Router();

//Importar el controlador de productos
let productsController = require('../controllers/productsController');

//Rutas para productos
router.get("/", productsController.index);
router.get("/id/:id", productsController.show);
router.get("/productsNew", productsController.create);
router.get("/results", productsController.search);

//Exportar el router
module.exports = router;