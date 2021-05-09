
import Order from "./models/Order.js"

(() => {
  const order = new Order();
  const orderId = order.getOrderId();
  console.log('orderId:', orderId)

  let textZone = document.getElementById("confirmationInfo");

  textZone.innerHTML +=
    // Creation of the HTML with the identifier and the total price of the order
    `<div class="orderInfos">
    <p> Merci !</p> 
    <p><strong>${orderId.contact._firstName}</strong> <strong>${orderId.contact._lastName}</strong> ,</p> 
    <p></p>votre commande <strong>${orderId.getOrderId}</strong> a bien été prise en compte, pour un montant de <strong>${orderId.totalOrderAmount}uros</strong>.</p>
    </div>
    `;
})();