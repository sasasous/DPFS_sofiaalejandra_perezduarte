const userController = require("./userController"); 
var controladores = {}; 
controladores.usuario = userController; 
app.use("/usuario", users);

módulo.exports = controladores;