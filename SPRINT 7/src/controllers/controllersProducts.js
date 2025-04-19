const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        res.render(path.resolve(__dirname, '../views/products/admin'), {products});
    },
    create: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        res.render(path.resolve(__dirname, '../views/products/create'));
    },
    save: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        let lastProduct = products.pop();
        products.push(lastProduct);
        let newProduct = {
            id: lastProduct.id +1,
            nombre: req.body.nombre,
            imagen: req.body.filename,
            categoria: req.body.categoria,
            precio: req.body.precio,
            fecha_agregado: req.body.fecha_agregado
        }
        products.push(newProduct);
        let newProductSave = JSON.stringify(products, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../database/products.json', newProductSave));
        res.redirect('/admin');
    },
    show: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        let myProduct;
        products.forEach(product => {
            if(product.id == req.params.id){
                myProduct = product;
            }
        })
        res.render(path.resolve(__dirname, '../views/products/detail'), {myProduct})
    }
}