//Módulo express
let express = require('express');

//Método Router de express
let router = express.Router();

//Importar el controlador de imágenes
let imagesController = require('../controllers/imagesController');

//Rutas para imágenes
router.get("/images", imagesController.index);
//Crear una imagen
router.post("/images/create", imagesController.create);
//Detalle de una imagen
router.get("/images/:id", imagesController.show);
//Crear una imagen
router.post("/images", imagesController.store);
//Edición de una imagen
router.get("/images/:id/edit", imagesController.edit);
//Actualizar una imagen
router.put("/images/:id", imagesController.update);
//Eliminar una imagen
router.delete("/images/:id", imagesController.destroy);

//Exportar el router
module.exports = router;