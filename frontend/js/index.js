/** @format */
import { getProducts } from "./models/Product.js";
import { numberWithCommas } from "./basesFunctions.js";
(async () => {
  const products = await getProducts();
  console.log(products);
  hydratePage(products);

  function hydratePage(products) {
    const result = document.getElementById("productsList");
    result.innerHTML = "";
    products.map((product) => displayProduct(product)).join("");
  }

  function displayProduct(product) {
    const templateElt = document.getElementById("product");
    const cloneElt = document.importNode(templateElt.content, true);

    cloneElt.getElementById("productImage").src = product.imageUrl;
    cloneElt.getElementById("productName").textContent = product.name;
    cloneElt.getElementById("productPrice").textContent = `${numberWithCommas(
      product.price / 100
    )}.00 €`;
    cloneElt.getElementById("productDescription").textContent =
      product.description;
    cloneElt.getElementById(
      "productLink"
    ).href = `./product.html?id=${product._id}`;

    const display = document
      .getElementById("productsList")
      .appendChild(cloneElt);
  }
})();