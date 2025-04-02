require("dotenv").config();
var sequelize = require("sequelize"); 
var db = new sequelize( 
    proceso.env.DB_NAME, 
    proceso.env.DB_USER, 
    proceso.env.DB_PASSWORD, 
    { 
        dialecto: "mysql", 
        host: proceso.env.DB_HOST, 
    } 
); 
módulo.exports = db;