"use strict";

window.addEventListener("load", function(){

  calcPrice();

  var orderForm = document.forms.cart1;
  var orderForm2 = document.forms.cart2;

  orderForm.elements.quant.onchange = calcPrice;
  orderForm2.elements.quanti.onchange = calcPrice;

});

function calcPrice() {

  var orderForm = document.forms.cart1;
  var orderForm2 = document.forms.cart2;

  var theCost = orderForm.elements.item1Cost.value;
  var qtyIndex = orderForm.elements.quant.selectedIndex;
  var qty = orderForm.elements.quant[qtyIndex].value;
  cart2.elements.item1qty.value = qty;

  var theCost2 = orderForm2.elements.item2Cost.value;
  var qtyIndex2 = orderForm2.elements.quanti.selectedIndex;
  var qty2 = orderForm2.elements.quanti[qtyIndex2].value;

  var orderCost = ((theCost * qty) + ((theCost2 * qty2)));
  totalss.elements.subTotal.value = formatUSCurrency(orderCost);
  cart2.elements.subTot.value = formatUSCurrency(orderCost);

  var salesTax = 0.08 * orderCost;
  totalss.elements.salesTax.value = formatNumber(salesTax, 2);
  cart2.elements.salTax.value = formatNumber(salesTax, 2);

  totalss.elements.ovTotal.value = formatUSCurrency((orderCost + salesTax));
  cart2.elements.theTot.value = formatUSCurrency((orderCost + salesTax));


}

function formatUSCurrency(val) {

   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );

}

function formatNumber(val, decimals) {

   return val.toLocaleString(undefined, {minimumFractionDigits: decimals,
                                         maximumFractionDigits: decimals});

}
