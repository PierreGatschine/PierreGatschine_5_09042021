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
    const cartItem = new CartItems(_product, _lense, _quantity);
    let cart = this.getproducts();
    console.log("cart:", cart);
    console.log(localStorage.getItem("productCart"));

    if (localStorage.getItem("productCart") === null) {
      cart.push(cartItem);
    } else {
      let itemHasChanged = false;
      for (let i = 0; i < cart.length; i++) {
        if (
          cart[i]._product.name == cartItem._product.name &&
          cart[i]._lense == cartItem._lense
        ) {
          //Checking whether product exactly the same or not (depending on name and lens)
          let cartItemsQuantityNumber = Number(cart[i]._quantity); // quantity in LocalStorage

          let cartQuantityNumber = Number(cartItem._quantity); // quantity of selected products

          let sumQuantity = cartItemsQuantityNumber + cartQuantityNumber;

          cart[i]._quantity = sumQuantity.toString();

          itemHasChanged = true;
        }
      }

      if (itemHasChanged == false) {
        cart.push(cartItem);
      }
    }
    this.setproducts(cart);
  }

  getTotalPrice() {
    let cart = this.getproducts();
    const totalPrice = Object.values(cart).reduce((acc, curr) => {
      return acc + (curr._product.price * curr._quantity) / 100;
    }, 0);
    return totalPrice;
  }

  emptyCart() {
    if (confirm ('Cette action va vider le contenu de votre Panier, si vous souhaitez annuler votre commande, veuillez cliquez sur OK')) {
        localStorage.removeItem('productCart');
    }
  }


}
