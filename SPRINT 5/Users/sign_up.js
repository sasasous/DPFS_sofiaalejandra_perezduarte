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