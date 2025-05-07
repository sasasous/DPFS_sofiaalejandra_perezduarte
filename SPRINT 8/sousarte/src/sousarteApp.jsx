import './sousarteApp.css';

export const sousarteApp = () => {

  //API URLS
  const urlProducts = './api/products/base.json';
  const urlUsers = './api/users/base.json';

  fetch(urlProducts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });

  fetch(urlUsers)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });

  return (
  <>
    <div className="Título">
        <h1> SOUSARTE </h1>
    </div>
  </>
  )
}

export default sousarteApp;