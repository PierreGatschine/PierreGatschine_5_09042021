/** @format */
import { CartItems } from "../cartItems.js";


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

    if (localStorage.getItem("productCart") === null) {
      cart.push(carIitem);
    } else {
      let itemHasChanged = false;

      for (let i = 0; i < cart.length; i++) {
        if (
          cart[i].product == carIitem.product &&
          cart[i].lense == carIitem.lense
        ) {
          // Vérification si produit exactement identique ou non (en fonction du nom et de la couleur)

          let carIitemQuantityNumber = Number(cart[i].quantity); // quantité dans le LocalStorage

          let cartQuantityNumber = Number(carIitem.quantity); // quantité produit sélectionné

          let sumQuantity = carIitemQuantityNumber + cartQuantityNumber;

          cart[i].quantity = sumQuantity.toString();

          itemHasChanged = true;
        }
      }

      if (itemHasChanged == false) {
        cart.push(carIitem);
      }
    }

    this.setproducts(cart);
  }

  removeItem(id, lense) {
    // Diminution de la quantité d'un produit dans le panier

    let cart = this.getCart();

    for (let i = 0; i < cart.length; i++) {
      // vérification que le produit est bien le bon grâce à son ID et sa couleur sélectionnée
      if (cart[i].product._id == id && cart[i].lense == lense) {
        cart[i].quantity--;
        this.saveCart(cart);

        //location.reload();
      } else {
        continue;
      }

      if (cart[i].quantity === 0) {
        // Suppression du produit si quantité = 0
        cart.splice(i, 1);
        this.saveCart(cart);
        location.reload();
      }
    }
    return cart;
  }

  addItem(id, lense) {
    // Augmentation de la quantité d'un produit dans le panier (même principe que removeItem)

    let cart = this.getCart();

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product._id == id && cart[i].lense == lense) {
        cart[i].quantity++;

        this.saveCart(cart);
        return cart;
        //location.reload();
      } else {
        continue;
      }
    }
  }

  /* emptyCart() {
    // Fonction permettant de vider le panier (On vide le localStorage)

    swal.setActionValue({ confirm: false, cancel: true });
    swal({
      title: "Êtes vous sur ?",
      text: "",
      icon: "warning",
      buttons: { cancel: "Retour au panier", confirm: "Vider mon panier" },
      dangerMode: true,
    }).then((result) => {
      if (result != null) {
        if (result.false) {
          swal("Panier vidé", "", "success");
        } else {
          localStorage.clear();
          location.reload(); // Trouver autre solution que de recharger la page
        }
      }
    });
  } */
}

