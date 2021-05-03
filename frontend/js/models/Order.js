
export default class Order {
  
  order(contact) {
    // Method for sending data to the server with Post
    const products = [];
    let cart = JSON.parse(localStorage.getItem("productCart")) || [];
    console.log('cart:', cart)
    const postUrlAPI = "http://localhost:3000/api/cameras/order";
    for (let i = 0; i < cart.length; i++) {
      products.push(cart[i]._product._id);
    }

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

  saveOrder(contact) {
    const request = this.order(contact);
    console.log('request:', request)
    fetch(request)
      .then((response) => response.json()) 
      .then((response) => {
        console.log('response:', response)
        let getOrderId = response.orderId;
        console.log('getOrderId:', getOrderId)
        
        //localStorage.clear();
        let orderRecap = { getOrderId, contact };
        console.log('orderRecap:', orderRecap)
        //localStorage.setItem("cartConfimed", JSON.stringify(getOrderId));
        localStorage.setItem("orderIsConfirmed", JSON.stringify(orderRecap));
      });
  }

  getOrderId() {
    // Method used to retrieve the value of orderIsConfirmed (order ID and amount)
    const checkoutItems =
      JSON.parse(localStorage.getItem("orderIsConfirmed")) || [];
    return checkoutItems;
  }
}