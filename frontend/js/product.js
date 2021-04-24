/** @format */

(async () => {
  const productId = getProductId();
  const productData = await getProductData(productId);
  console.log(productData);
  hydratePage(productData);
})();

function getProductId() {
  return new URL(window.location.href).searchParams.get("id");
}

async function getProductData(productId) {
  let url = `http://localhost:3000/api/cameras/${productId}`;
  return fetch(url)
    .then(response => response.json())
    .then(productData => productData)
    .catch(err => {
      console.log(err);
    });   
}

function hydratePage(productData) {
  document.querySelector("#productImage").src = productData.imageUrl;
  document.querySelector("#productName").textContent = productData.name;
  document.querySelector("#productPrice").textContent = `${
    productData.price / 100
  }.00 €`;
  document.querySelector("#productDescription").textContent =
    productData.description;
  }
