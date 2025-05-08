import { use, useState } from 'react';
import './sousarteApp.css';

export const sousarteApp = () => {

  //API URLS
  const urlProducts = './api/products/base.json';
  const urlUsers = './api/users/base.json';

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(urlProducts);
      const data = await response.json()
      console.log(data)
      setProducts(data);
    }

    catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  //Total de productos
  return (
    <>
      //Título
      <div className="Título">
        <h1>Sousarte App</h1>
      </div>

      //Total de productos
      <div className="totalProducts">
        <h2>Total de productos: {products.length}</h2>
      </div>

      //Total de usuarios
      <div className="totalUsers">
        <h2>Total de usuarios: {users.length}</h2>
      </div>

      //Total de categorías en productos
      <div className="totalCategories">
        <h2>Total de categorías en productos: {products.reduce((acc, product) => acc + product.categories.length, 0)}</h2>
      </div>

      //Total de categorías en usuarios
      <div className="totalCategoriesUsers">
        <h2>Total de categorías en usuarios: {users.reduce((acc, user) => acc + user.categories.length, 0)}</h2>
      </div>

      //Panel de detalle de último producto o usuario creado
      <div className="detailPanelLasrtProductUser">
        <h2>Detalle del último producto o usuario creado:</h2>
        {products.length > 0 && (
          <div>
            <h3>Último Producto:</h3>
            <p>Nombre: {products[products.length - 1].name}</p>
            <p>Categorías: {products[products.length - 1].categories.join(', ')}</p>
          </div>
        )}
        {users.length > 0 && (
          <div>
            <h3>Último Usuario:</h3>
            <p>Nombre: {users[users.length - 1].name}</p>
            <p>Categorías: {users[users.length - 1].categories.join(', ')}</p>
          </div>
        )}
      </div>

      //Panel de categorías con el total de productos de cada una
      <div className="categoriesPanel">
        <h2>Panel de categorías con el total de productos de cada una:</h2>
        {products.length > 0 && (
          <ul>
            {Array.from(
              products.reduce((map, product) => {
                product.categories.forEach((category) => {
                  map.set(category, (map.get(category) || 0) + 1);
                });
                return map;
              }, new Map())
            ).map(([category, count]) => (
              <li key={category}>
                {category}: {count} producto(s)
              </li>
            ))}
          </ul>
        )}
      </div>

      //Panel con el listado de productos
      <div className="productsPanel">
        <h2>Listado de productos:</h2>
        {products.length > 0 && (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3> {product.name} </h3>
                <h3> Precio: {product.price.join(', ')} </h3>
                <h3> Categorías: {product.categories.join(', ') }</h3>
                <h3> Fecha de agregación: {product.aggregation_date} </h3>
                <h3> Imagen: {product.image} </h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
