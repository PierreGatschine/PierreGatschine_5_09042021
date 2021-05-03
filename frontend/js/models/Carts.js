/** @format */
import { CartItems } from "./CartItems.js";

export default class Carts {
  
  getproducts() {
    let cart = JSON.parse(localStorage.getItem("productCart")) || [];
    return cart;
  }

  setproducts(cart) {
    localStorage.setItem("productCart", JSON.stringify(cart));
  }

  addToCart(_product, _lense, _quantity) {
    const carIitem = new CartItems(_product, _lense, _quantity);
    let cart = this.getproducts();
    console.log("cart:", cart);
    console.log(localStorage.getItem("productCart"));
    

    if (localStorage.getItem("productCart") === null) {
      cart.push(carIitem);
    }
    
    this.setproducts(cart);
  }

} 
