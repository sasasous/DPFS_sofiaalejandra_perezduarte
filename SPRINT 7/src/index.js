const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));
//Motor de plantillas
app.set('view engine', 'ejs');
//Para poder recibir información
app.use(express.urlencoded({ extended: false }));
//Middleware de aplicación
app.use(methodOverride('_method'));

//Requerir rutas
const homeRoutes = require('./routes/home');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');

//Para usar las rutas
app.use(homeRoutes);
app.use(productsRoutes);
app.use(usersRoutes);
app.use(adminRoutes);

//Levantar servidor
app.listen(3000, 'localhost', () => console.log
    ('Servidor corriendo en http://localhost:3000'));