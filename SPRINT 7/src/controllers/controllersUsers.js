const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req, res) => {
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.jsom')));
        res.render(path.resolve(__dirname, '../views/users/admin'), {users});
    },
    create: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));
        res.render(path.resolve(__dirname, '../views/users/create'));
    },
    save: (req, res) => {
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));
        let lastUser = users.pop();
        users.push(lastUser);
        let newUser = {
            id: lastUser.id +1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            contrasena: req.body.contrasena,
            categoria: req.body.categoria,
            imagen: req.body.filename
        }
        users.push(newUser);
        let newUserSave = JSON.stringify(users, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../database/users.json', newUserSave));
        res.redirect('/admin');
    }
}