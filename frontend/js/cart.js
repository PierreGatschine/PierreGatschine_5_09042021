/** @format */

import Carts from "./models/Carts.js";
import  Order  from "./models/Order.js"
import Contact from "./models/Contact.js"
import { numberWithCommas } from "./basesFunctions.js";
import { nameValid, emailValid, zipValid } from "./regexForms.js";

(() => {
  const cart = new Carts();
  console.log("cart:", cart);
  const productCart = cart.getproducts();
  console.log("productCart:", productCart);
  hydratePage(productCart);


  function hydratePage(productCart) {
    // Loop over all products and displays them
    const productList = Object.values(productCart);
    console.log("productList:", productList);
    productList.forEach((product) => {
      displayProduct(product);
    });
  }

  function displayProduct(product) {

    const templateElt = document.getElementById("productTemplate");
    const cloneElt = document.importNode(templateElt.content, true);
    // Hydrate template
    cloneElt.getElementById("productImg").src = product._product.imageUrl;
    cloneElt.getElementById("productName").textContent = product._product.name;
    cloneElt.getElementById("productLense").textContent = product._lense;
    cloneElt.getElementById("productQuantity").textContent = product._quantity;
    cloneElt.getElementById("priceItem").textContent = `${numberWithCommas(
      product._product.price / 100
    )}.00 €`;
    cloneElt.getElementById(
      "productTotalPrice"
    ).textContent = `${numberWithCommas(
      (product._product.price * product._quantity) / 100
    )}.00€`;

    
    // Display total amount of the order
   let totalOrderAmount = (document.getElementById(
     "totalPriceOrder"
   ).textContent = `${numberWithCommas(cart.getTotalPrice())}.00€`);

    // Display template
    document.getElementById("productsList").prepend(cloneElt);
  }

 deleteOrder.addEventListener("click", function(e) {
   e.preventDefault();
   const cart = new Carts();
   cart.emptyCart();
   setTimeout(function () {
     window.location = "./index.html";
   }, 2000);
 })
 
 
 
 /***** Form ******/
 confirmOrder.addEventListener("click", function (e) {
     // Confirm the cart and display the form hidden so far
     document.getElementById("forms").style.display = "block";
   });

  validateOrder.addEventListener("click", function (e) {
    e.preventDefault();
    // Validating the form and retrieving the Order ID using the order () method in Order
    const order = new Order();
    console.log("order:", order);
    //let totalCost = totalCartCost.innerHTML;
    let totalOrderAmount = (document.getElementById(
      "totalPriceOrder"
    ).textContent = `${numberWithCommas(cart.getTotalPrice())}.00€`);
    let firstName = document.getElementById("firstName").value;
    console.log('firstName:', firstName)
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let zip = document.getElementById("zip").value;
    let city = document.getElementById("city").value;

     if (
       !(
         nameValid(firstName) === true &&
         nameValid(lastName) === true &&
         emailValid(email) === true &&
         nameValid(address) === true &&
         zipValid(zip) === true &&
         nameValid(city) === true

       )
     ) {
       alert(
         "Veuillez remplir tous les champs afin de finaliser votre commande"
       );
     } else {
       let contact = new Contact(
         firstName,
         lastName,
         email,
         address,
         zip,
         city         
       );
       console.log("contact:", contact);
       order.saveOrder(contact, totalOrderAmount);

       setTimeout(function () {
         window.location = "./order.html";
       }, 2000);
     } 
  }); 
})();
