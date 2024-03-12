let lotSize = document.getElementById("lot-size");
let investedAmt = document.getElementById("invested amount");
let buyPrice = document.getElementById("current-price");
let calcBtn = document.getElementById("Calc-btn");
let quantity = document.getElementById("quantity");

calcBtn.onclick = function () {
  let requiredLots = Math.round(
    investedAmt.value / lotSize.value / buyPrice.value
  );
  let textToAppend =
    '<h1 class="text-success">Quantity: ' +
    requiredLots * lotSize.value +
    "</h1>" +
    '<h1 class="text-primary">Next Lot Quantity: ' +
    (requiredLots + 1) * lotSize.value +
    "</h1>";
  quantity.innerHTML = textToAppend;
};
