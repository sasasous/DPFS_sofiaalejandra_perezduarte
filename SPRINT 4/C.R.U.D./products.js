//Módulo express
let express = require('express');

//Método Router de express
let router = express.Router();

//Importar el controlador de productos
let productsController = require('../controllers/productsController');

//Rutas para productos
router.get("/products", productsController.index);
//Crear un producto
router.post("/products/create", productsController.create);
//Detalle de un producto
router.get("/products/:id", productsController.show);
//Crear un producto
router.post("/products", productsController.store);
//Edición de un producto
router.get("/products/:id/edit", productsController.edit);
//Actualizar un producto
router.put("/products/:id", productsController.update);
//Eliminar un producto
router.delete("/products/:id", productsController.destroy);

//Exportar el router
module.exports = router;