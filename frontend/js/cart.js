/** @format */

import Carts from "./models/Carts.js";
//import { getTotalPrice } from "./basesFunctions.js"; 
//import { CartItems } from "./CartItems.js";
(() => {
    //const cartItem = new CartItems(product, lense, quantity);
  //console.log("cartItem:", cartItem);
  const cart = new Carts();
  console.log("cart:", cart);
  const productsInShoppingCart = cart.getproducts();
  console.log('productsInShoppingCart:', productsInShoppingCart)
  if (productsInShoppingCart === null) return;
  hydratePage(productsInShoppingCart);
   
  function hydratePage(productsInShoppingCart) {
    // Set total price
    /* document.getElementById("totalPrice").textContent =
      Cart.getTotalPrice() + ".00€"; */

    // Loop over all products and displays them
    const productList = Object.values(productsInShoppingCart);
    console.log('productList:', productList)
    productList.forEach((product) => {
      displayProduct(product);
      console.log(displayProduct(product));
    });

    //addEventListeners();
  }

  function displayProduct(product) {
    const templateElt = document.getElementById("productTemplate");
    const cloneElt = document.importNode(templateElt.content, true);

    // Hydrate template
    const display = cloneElt.getElementById("productName").textContent = product._product;
    //cloneElt.getElementById("productName").textContent = product.name;
    cloneElt.getElementById("productQuantity").textContent =
      product.quantity - 1;
    cloneElt.getElementById("productPrice").textContent =
      product.price / 100 + ".00€";
    cloneElt.getElementById("productTotalPrice").textContent =
      (product.price * product.quantity) / 100 + ".00€";

    //console.log('display:', display)

    // Display template
    document.getElementById("productsList").prepend(cloneElt);
  }

  /* function displayProduct(product) {
    // Get & clone template
    const templateElt = document.getElementById("productTemplate");
    const cloneElt = document.importNode(templateElt.content, true);

    // Hydrate template
    cloneElt.getElementById("productName").textContent = product.name;
    cloneElt.getElementById("productQuantity").selectedIndex =
      product.quantity - 1;
    cloneElt.getElementById("productPrice").textContent =
      product.price / 100 + ".00€";
    cloneElt.getElementById("productTotalPrice").textContent =
      (product.price * product.quantity) / 100 + ".00€";

    // Add events
    cloneElt.getElementById("productQuantity").onchange = (e) => {
      e.preventDefault();

      Cart.updateProductQuantity(product._id, e.target.selectedIndex + 1);

      // Update product total price
      const totalPriceElt = e.target.parentElement.parentElement.parentElement.querySelector(
        "#productTotalPrice"
      );
      const newPrice =
        (product.price * Cart.getProductQuantity(product._id)) / 100 + ".00€";
      totalPriceElt.textContent = newPrice;

      // Update all products total price
      document.getElementById("totalPrice").textContent =
        Cart.getTotalPrice() + ".00€";
    };

    // Display template
    document.getElementById("productsList").prepend(cloneElt);
  } */

})();
