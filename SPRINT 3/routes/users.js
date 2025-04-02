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

const express = require("express"); 
const router = express.Router(); 
const controller = require("../controller/indexController");
router.get("/", controlador.usuario.getAll); 
router.get("/:nombre", controlador.usuario.getNombre); 
router.post("/", controlador.usuario.createNew); 
router.put("/", controlador.usuario.editAt); 
router.delete("/", controlador.usuario.deleteUser);

//Exportar módulo
module.exports = router; 