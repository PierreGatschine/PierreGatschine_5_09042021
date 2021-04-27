class Carts {
  constructor(products, quantity, price) {
    this._products = products;
    this._quantity = quantity;
    this._price = price;
  }

  get Products() {
    return JSON.parse(localStorage.getItem("shoppingCart") || "{}");
  }

  set Products(products) {
    localStorage.setItem("shoppingCart", JSON.stringify(products));
  }

  getQuantity() {}

  setQuantity(quantity) {}

  getPrice() {}

  setPrice() {}

  addProduct() {}

  updateProduct() {}

  deleteProduct() {}
}

const cart = new Carts();
console.log('cart:', cart)

console.log(cart.Products);