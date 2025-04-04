const { error } = require("console");
let db = require("../database/models");
const { where } = require("sequelize");

let productController = {
    index: function (req, res) {
        db.Product.findAll()
            .then(function (data) {
                return res.send(data);
                let productList = data;
                res.render("productos", { title: "Productos", listaProductos: productsList });
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    show: function (req, res) {
        let id = req.params.id;
        db.Producto.findByPk(id)
            .then(function (data) {
                return res.send(data);
                return res.send ("Detalle de producto: ${req.params.id}");
            })
            .catch(function (error) {
                console.log(error);
            });
        return res.send("Producto: ${req.params.id}");
    },
    create: function (req, res) {
        return res.render("crearProducto", { title: "Crear Producto" });
    },
    search: function (req, res) {
        let searchTerm = req.query.search;
        db.Producto.findAll({
            where: [{ title: "id" }]
        })
            .then(function (data) {
                let productList = data;
                return res.send(data);
                return res.render("Resultado de busqueda: $(req.params.id", { title: "Resultado de busqueda", searchTerm });
        
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    store: function (req, res) {
        let info = req.body;
        let producto = {
            id: info.id,
            nombre: info.nombre,
            imagen: info.imagen,
            categoria: info.categoria,
            precio: info.precio,
            fecha_agregado: info.fecha_agregado,
        };

        db.Producto.create(producto)
            .then(function (productoNuevo) {
                return res.send(productoNuevo);
                return res.redirect("/");
            })
            .catch(function (error) {
                console.log(error);
            });

        req.session.ultimoProducto = info;
        res.cookie("ultimoProducto", info, title, { maxAge: 1000 * 60 * 60 * 24 });
        return res.redirect("/")
    },
    delete: function (req, res) {
        db.Producto.destroy({
            where: [{ id: req.params.id }]
        })
            .then(function (data) {

            })
            .catch(function (error) {
                console.log(error);
            });
    },
    update: function (req, res){
        db.Producto.update(
            { title: "" },
            { where: [{ id: req.params.id }] }
        )
        .then(function (data) {
            return res.redirect("/productos");
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}