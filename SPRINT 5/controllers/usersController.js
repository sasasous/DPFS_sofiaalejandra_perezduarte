//Controladores de usuarios
let usersController = {
    index: function(req, res) {
        let usersList;
        return res.render("users/users", {
            title: "Users",
            listaIlustraciones: usersList
        });
    },
    show: function(req, res) {
        return res.sende ("Detalle de usuario: $(req.params.id)");
    },
    create: function(req, res) {
        return res.send("Formulario de creación de usuario");
    },
    search: function(req, res) {
        return res.render("searchResults", {
            title: "Resultados de búsqueda"});
    },
    };
    //Exportamos el controlador
    module.exports = usersController;
    