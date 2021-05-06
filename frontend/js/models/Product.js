/** @format */

export default class Product {
  constructor(_id, name, price, imageUrl, description, lense) {
    
    this.__id = _id;
    this._name = name;
    this._price = price;
    this._imageUrl = imageUrl;
    this._description = description;
    this._lense = lense;
  }

}

// Method for calling all products
export async function getProducts() {
  let url = "http://localhost:3000/api/cameras";
  return fetch(url)
    .then((response) => response.json())
    .then((products) => products)
    .catch((err) => console.log(err));
}

// Method to call up a product using its identifier
export async function getProductData(productId) {
  let url = `http://localhost:3000/api/cameras/${productId}`;
  return fetch(url)
    .then((response) => response.json())
    .then((productData) => productData)
    .catch((err) => {
      console.log(err);
    });
}

