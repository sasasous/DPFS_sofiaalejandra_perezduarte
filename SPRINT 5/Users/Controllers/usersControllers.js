const { title } = require("process");

let usersController = {
    index: function (req, res) {
    },
    show: function (req, res) {
        return res.send("User: $(req.params.id)");
    },
    create: function (req, res) {
        return res.send("Create User", {title: "Create User"});
    },
    search: function (req, res) {
        let searchTerm = req.query.search
        return res.render("searchResults", {
            title: "Search Results",
            searchTerm: searchTerm
        });
    },
    store: function (req, res) {
        let info = req.body;
        req.session.user = info;
        res.cookie ("user", info, { maxAge: 1000 * 60 * 60 });
        return res.send(req.session);
        return res.redirect("/");
    }
}
