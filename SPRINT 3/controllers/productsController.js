const { error } = require("console");
let db = require("../database/models");

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
        return res.send("Producto: ${req.params.id}");
    },
    create: function (req, res) {

    }
}