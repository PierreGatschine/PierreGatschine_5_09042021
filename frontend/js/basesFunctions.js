/** @format */

// appel asynchrone de l'API
async function getProducts() {
  let url = "http://localhost:3000/api/cameras";
  return fetch(url)
    .then((response) => response.json())
    .then((products) => products)
    .catch((err) => console.log(err));
}


async function getProductData(productId) {
  let url = `http://localhost:3000/api/cameras/${productId}`;
  return fetch(url)
    .then((response) => response.json())
    .then((productData) => productData)
    .catch((err) => {
      console.log(err);
    });
}

// Affiche les prix avec les milliers détachés (1 000,00€)
 const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export { getProducts, getProductData, numberWithCommas };