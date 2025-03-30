//Módulo express
let express = require('express');

//Método Router de express
let router = express.Router();

//Importar el controlador de productos
let usersController = require('../controllers/usersController');

//Rutas para productos
router.get("/users", usersController.index);
//Crear un producto
router.post("/users/create", usersController.create);
//Detalle de un producto
router.get("/users/:id", usersController.show);
//Crear un producto
router.post("/users", usersController.store);
//Edición de un producto
router.get("/users/:id/edit", usersController.edit);
//Actualizar un producto
router.put("/users/:id", usersController.update);
//Eliminar un producto
router.delete("/users/:id", usersController.destroy);

//Exportar el router
module.exports = router;