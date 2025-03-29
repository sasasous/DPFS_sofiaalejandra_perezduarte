//Controladores de productos
let productController = {
index: function(req, res) {
    let productList = ["agua", "LEV", "Serpiente", "Love"];
    return res.render("productos/productos", {
        title: "Productos",
        listaIlustraciones: productList
    });
},
show: function(req, res) {
    return res.sende ("Detalle de ilustracón: $(req.params.id)");
},
create: function(req, res) {
    return res.send("Formulario de creación de ilustración");
},
search: function(req, res) {
    return res.render("searchResults", {
        title: "Resultados de búsqueda"});
},
};
//Exportamos el controlador
module.exports = productController;
