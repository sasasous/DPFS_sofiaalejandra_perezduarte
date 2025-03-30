//Módulo express
let express = require('express');

//Método Router de express
let router = express.Router();

//Importar el controlador de usuarios
let usuariosController = require('../controllers/usuariosController');

//Rutas para usuarios
router.get("/users", usuariosController.index);
//Crear un usuario
router.post("/users/create", usuariosController.create);
//Detalle de un usuario
router.get("/users/:id", usuariosController.show);
//Crear un usuario (formulario)
router.get("/users/create", usuariosController.create);
//Crear un usuario
router.post("/users", usuariosController.store);
//Edición de un usuario
router.get("/users/:id/edit", usuariosController.edit);
//Actualizar un usuario
router.put("/users/:id", usuariosController.update);
//Eliminar un usuario
router.delete("/users/:id", usuariosController.destroy);

//Exportar el router
module.exports = router;