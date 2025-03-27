//Módulo express
let express = require('express');

//Método Router
let router = express.Router();

// Ruta raíz de los usuarios /Inicio
router.get('/', function (req, res) {
  res.send('Ruta de usuarios');
});

// Ruta para obtener un usuario por su ID /Detalle de usuario
router.get('/detalle/:id', function (req, res) {
  res.send('Detalle de usuario');
});

// Ruta para crear un usuario /Crear usuario
router.post('/crear', function (req, res) {
  res.send('Crear usuario');
});

// Ruta para actualizar un usuario por su ID /Actualizar usuario
router.put('/actualizar/:id', function (req, res) {
  res.send('Actualizar usuario');
});

// Ruta para eliminar un usuario por su ID /Eliminar usuario
router.delete('/eliminar/:id', function (req, res) {
  res.send('Eliminar usuario');
});

//Exportar módulo
module.exports = router; 