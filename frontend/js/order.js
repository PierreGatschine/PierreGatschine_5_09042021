
import Order from "./models/Order.js"

(() => {
  const order = new Order();
  const orderId = order.getOrderId();

  let textZone = document.getElementById("confirmationInfo");

  textZone.innerHTML +=
    // Création du HTML avec l'identifiant et le prix total de la commande
    `<div class="orderInfos">
    <h1> Merci beaucoup pour votre commande ${orderId.contact._firstName} ${orderId.contact._lastName} ! </h1>
    <h2>Voici votre récapitulatif :</h2>
    <h3>Identifiant de commande : <h3><span class="importedInfo">${orderId.getOrder_Id}</span></h3>
    </div>
    `;
})();