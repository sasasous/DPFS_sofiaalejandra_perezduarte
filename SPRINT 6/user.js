const sequelize = require("sequelize"); 
const db = require("../config/database"); 
var user = db.define( 
    "usuario", 
    { 
        id: { tipo: sequelize.INTEGER, primaryKey: true }, 
        nombre: { tipo: sequelize.STRING }, 
        contraseña: { tipo: sequelize.STRING }, 
        correo: { tipo: sequelize.STRING },
    }, 
    { 
        // congelar la tabla de nombres sin usar *s en el nombre
         freezeTableName: true, 
        // no usar las marcas de tiempo createdAt/update
         timestamps: false, 
    } 
); 
module.exports = usuario;