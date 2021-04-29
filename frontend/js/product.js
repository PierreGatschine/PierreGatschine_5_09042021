/** @format */
import Carts from "./models/Carts.js";
import { numberWithCommas } from "./basesFunctions.js"; 

(async () => {
  const productId = getProductId();
  console.log('productId:', productId)
  const productData = await getProductData(productId);
  console.log(productData);
  hydratePage(productData);


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
  document.querySelector("#productPrice").textContent = `${numberWithCommas(
    productData.price / 100
  )}.00 €`;
  document.querySelector("#productDescription").textContent =
    productData.description;
  document.querySelector("#productLens").textContent = productData.lenses;

  // Afficher le selecteur de lentilles
  let lensesElt = document.getElementById("productLens");
  let lenses = productData.lenses;

  for (let lense of lenses) {
    let selectElt = document.createElement("option");
    selectElt.setAttribute("value", lense);
    selectElt.textContent = lense;
    lensesElt.appendChild(selectElt);
  }
  
   basket.addEventListener("click", function(e) {
     e.preventDefault();
     // Clique sur bouton ajouter au panier
     let product = productId;
    console.log(product);
     let lense = document.querySelector("select").value;
     console.log('lense:', lense)
     let quantity = document.getElementById("quantityInput").value;
     console.log('quantity:', quantity)

     if (quantity < 1) {
       alert("Veuillez sélectionner un produit", "", "error");
     } else {
       alert("Produit ajouté au panier", "", "success");

       //const cartRepository = new CartRepository();
        const cart = new Carts(); // fonction ajouter au panier (addToCart) de CartRepository
        //console.log('cart:', cart)
        cart.addToCart(product, lense, quantity);
        //console.log(cart.addToCart(product, lense, quantity));
     }
   });
}
})();

/* function redirectToShoppingCart(productName) {
  window.location.href = `${window.location.origin}/cart.html?lastAddedProductName=${productName}`;
} */



 /* const cloneElt = document.cloneNode(true);  */

  /*  lensesElt.appendChild(selectElt); */

  /*  let arrayLenses = response["lenses"];
    for(let i in arrayLenses) {
        let newOption = document.createElement("option");
        newOption.setAttribute("value", arrayLenses[i])
        newOption.text = arrayLenses[i];
        selectDiv.add(newOption); */

  //productData.lenses.forEach((lense) => {
  // Get & clone template for one color
  /* const templateElt = document.getElementById("productLens");
     console.log("templateElt:", templateElt);
     const cloneElt = document.importNode(templateElt.content, true);
     console.log("cloneElt:", cloneElt);

     // Hydrate color clone
    cloneElt.querySelector("option").textContent = lense; */

  /*  const selectElt = (document
     .querySelector("#productLens")
     .textContent = lense);
   console.log("selectElt:", selectElt);

 */ // Display a new color
  /* lensesElt.appendChild(cloneElt);  */

  /* });
 lensesElt.appendChild(selectElt); */

  // Add event listeners on button
  /* let addCart = document.getElementById("addCart").onclick = (e) => {
    e.preventDefault();
    Cart.addProduct(product);
    redirectToShoppingCart(product.name);
  };
 */
