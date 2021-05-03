/** @format */
import Carts from "./models/Carts.js";
import { getProductData } from "./models/Product.js";
import { numberWithCommas } from "./basesFunctions.js";

(async () => {
  const productId = getProductId();
  console.log("productId:", productId);
  const productData = await getProductData(productId);
  console.log('productData:', productData)
  
  hydratePage(productData);

  function getProductId() {
    return new URL(window.location.href).searchParams.get("id");
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

    preOrder.addEventListener("click", function (e) {
      e.preventDefault();
      // Click on the add to cart button
      let product = productData;
      console.log("product:", product);
      let lense = document.querySelector("select").value;
      console.log("lense:", lense);
      let quantity = document.getElementById("quantityInput").value;
      console.log("quantity:", quantity);

      if (quantity < 1) {
        alert("Veuillez sélectionner un produit", "", "error");
      } else {
        confirm("Produit ajouté au panier", "", "success");

        const cart = new Carts();
        //console.log('cart:', cart)
        cart.addToCart(product, lense, quantity);
      }
    });
  }
})();

