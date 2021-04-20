/** @format */

(async () => {
  const products = await getProducts();
  console.log(products);
  hydratePage(products);
})();

async function getProducts() {
  return fetch("http://localhost:3000/api/cameras")
    .then(response => response.json())
    .then(products => products)
    .catch(error => console.log("Erreur"));
}

function hydratePage(products) {
  // Remove loading boxes
  document.getElementById("productsList").innerHTML = "";

  // Loop over all products and displays them
  products.forEach(product => {
    displayProduct(product);
  });
}

function displayProduct(product) {
  const templateElt = document.getElementById("product");

  // Clone template
  const cloneElt = document.importNode(templateElt.content, true);

  // Hydrate template
  cloneElt.getElementById("productImage").src = product.imageUrl;
  cloneElt.getElementById("productName").textContent = product.name;
  cloneElt.getElementById("productPrice").textContent = `${
    product.price / 100
  }.00 €`;
  cloneElt.getElementById("productDescription").textContent =
    product.description;
  cloneElt.getElementById(
    "productLink"
  ).href = `/products.html?id=${product._id}`;

  // Display template
  document.getElementById("productsList").appendChild(cloneElt);
}
