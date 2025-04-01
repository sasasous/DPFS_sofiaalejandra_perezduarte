var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);

// catch 404 and forward to error handler   
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}; 

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//Session
const session = require('express-session')
app.use(session({
  secret: 'users',
  resave: false,
  saveUninitialized: true,
}))

const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file es el archivo del `avatar`
  // req.body contendrá los campos de texto, si los hubiera.
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files es el arreglo (array) de archivos `photos`
  // req.body contendrá los campos de texto, si los hubiera.
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files es un objeto (String -> Array) donde el nombre del campo es la clave (key) y el valor es el arreglo (array) de archivos
  //
  // Ejemplo
  //  req.files['avatar'][0] -> Archivo
  //  req.files['gallery'] -> Array
  //
  // req.body contendrá los campos de texto, si los hubiera.
})

//To hash the password
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB

// Load hash from your password DB
bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false

const hash = bcrypt.hashSync("bacon", 10);

//Guarda datos enviados en archuivo JSON
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.json');

module.exports = app;