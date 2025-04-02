//Módulo express
let express = require('express');

//Método Router
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

const userModel = require("./user"); 
const model = {}; 
modelo.usuario = user; 
módulo.exports = modelo;

//Exportar módulo
module.exports = router;