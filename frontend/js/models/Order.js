
export default class Order {
  order(contact) {
    // Method for sending data to the server with Post
    const products = [];
    let cart = JSON.parse(localStorage.getItem("productCart")) || [];
    console.log("cart:", cart);

    let keys = Object.keys(cart);
    for (let key of keys) {
      products.push(cart[key]._product._id);
    }
    console.log("products:", products);

    const postUrlAPI = "http://localhost:3000/api/cameras/order";
    console.log("postUrlAPI:", postUrlAPI);
    const request = new Request(postUrlAPI, {
      method: "POST",
      body: JSON.stringify({ contact, products }),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    return request;
  }
  // Method which retrieves the contact object and the total amount as a parameter and adds the location in localstorage
  saveOrder(contact, totalOrderAmount) {
    const request = this.order(contact);
    console.log("request:", request);
    fetch(request)
      .then((response) => response.json())
      .then((json) => {
        //console.log("response:", json);
        let getOrderId = json.orderId;
        //console.log("getOrderId:", getOrderId);

        let orderRecap = { getOrderId, contact, totalOrderAmount };
        console.log("orderRecap:", orderRecap);
        //localStorage.removeItem("productCart");
        localStorage.setItem("cartConfimed", JSON.stringify(getOrderId));
        localStorage.setItem("orderIsConfirmed", JSON.stringify(orderRecap));
      })
      .catch(() => {
        alert(error);
      });
  }

  getOrderId() {
    // Method used to retrieve the value of orderIsConfirmed (order ID and amount)
    const checkoutItems =
      JSON.parse(localStorage.getItem("orderIsConfirmed")) || [];
    return checkoutItems;
  }
}