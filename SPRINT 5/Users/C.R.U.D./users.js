//Módulo express
let express = require('express');

//Método Router de express
let router = express.Router();

//Importar el controlador de usuarios
let usersController = require('../controllers/usersController');

//Rutas para usuarios
//Listado de usuarios
router.get("/users", productsController.index);
//Crear un usuario
router.get("/users/create", productsController.create);
//Detalle de un usuario
router.get("/users/:id", productsController.show);
//Crear un usuario
router.post("/users", productsController.store);
//Edición de un usuario
router.get("/users/:id/edit", productsController.edit);
//Actualizar un usuario
router.put("/users/:id", productsController.update);
//Eliminar un usuario
router.delete("/users/:id", productsController.destroy);

//Exportar el router
module.exports = router;