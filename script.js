function payNow(){

  const amount = document.getElementById("amount").value;
  const phone = document.getElementById("phone").value;
  const operator = document.getElementById("operator").value;

  const serviceKey = "NyoavGYNbAkZ8TkF8iQqa9rqPhcM4Mby";

  const url =
    `https://api.monetbil.com/widget/v2.1/${serviceKey}` +
    `?amount=${amount}` +
    `&phone=${phone}` +
    `&operator=${operator}` +
    `&country=CM` +
    `&currency=XAF`;

  window.location.href = url;
}
