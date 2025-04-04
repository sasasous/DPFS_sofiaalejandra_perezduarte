const { title } = require("process");
let db = require("../database/models");
let op = db.Sequelize.Op;

let UsuariosController = {
    index: function (req, res) {
        db.Usuario.findAll()
            .then(function (data) {
                return res.send(data);
                let userList = data;
                return res.render("usuario", { title: "Usuarios", listaUsuarios: userList });
            })
            .catch(function (error) {
                console.log(error);
            });
        
    },

    show: function (req, res) {
        let id = req.params.id
        db.Usuario.findByPk(id)
        .then(function (data) {
            return res.send (data);
          return res.send("User: $(req.params.id)"); 
        })
        .catch(function (error) {
            console.log(error);
        });
        
    },

    create: function (req, res) {
        return res.render("userNew", {title: "Crear Usuario"});
    },

    search: function (req, res) {
        let info = req.body;
        let searchTerm = req.params.search;
    },

    store: function (req, res) {
        let info = req.body;
        let usuario = {
            usuario_id:"",
            nombre:"",
            apellido:"",
            correo:"",
            contrasena:"",
            categoria:"",
            imagen:"",
        }
        db.Usuario.create(usuario)
        .then(function (nuevoUsuario) {
            return res.send(nuevoUsuario);
            return res.redirect("/");
        })
        .catch(function (error) {
            console.log(error);
        })
        let searchTerm = req.params.search
            return res.render("searchResults", {
            title: "Resultados de la búsqueda",
            searchTerm});
        req.session.user = info;
        res.cookie ("lastUser", info.title, { maxAge: 1000 * 60 * 60 });
        return res.send(req.session);
        return res.redirect("/");
    },

    update: function(req, res) {
        db.Usuario.update(
            {title: req.body.title},
            {where: [{id: req.params.id}]}
        )
        .then(function(){
            return res.redirect("/usuarios");
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

//Exportar el controlador
module.exports = UsuariosController;