/** @format */
import { getProducts } from "./models/Product.js";
import { numberWithCommas } from "./basesFunctions.js";
(async () => {
  const products = await getProducts();
  console.log(products);
  hydratePage(products);

  function hydratePage(products) {
    /*document.querySelector("#productsList").innerHTML = "";

  products.map(product => {
    displayProduct(product);
  }); */

    const result = document.querySelector("#productsList");
    result.innerHTML = "";

    products.map((product) => displayProduct(product)).join("");
  }

  function displayProduct(product) {
    const templateElt = document.querySelector("#product");

    const cloneElt = document.importNode(templateElt.content, true);
    cloneElt.querySelector("#productImage").src = product.imageUrl;
    cloneElt.querySelector("#productName").textContent = product.name;
    cloneElt.querySelector("#productPrice").textContent = `${numberWithCommas(
      product.price / 100
    )}.00 €`;
    cloneElt.querySelector("#productDescription").textContent =
      product.description;
    cloneElt.querySelector(
      "#productLink"
    ).href = `./product.html?id=${product._id}`;

    const display = document
      .querySelector("#productsList")
      .appendChild(cloneElt);
  }
})();