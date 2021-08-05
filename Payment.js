"use strict";

window.addEventListener("load", function(){


          var orderData = location.search.slice(1);

          orderData = orderData.replace(/\+/g," ");
          orderData = decodeURIComponent(orderData);

          var orderFields = orderData.split(/[&=]/g);

          document.forms.lastCart.elements.item1.value = orderFields[13];
          document.forms.lastCart.elements.item1price.value = orderFields[15];
          document.forms.lastCart.elements.item2.value = orderFields[3];
          document.forms.lastCart.elements.item2price.value = orderFields[17];

          document.forms.finalCart.elements.subTotal.value = orderFields[5];
          document.forms.finalCart.elements.salesTax.value = orderFields[7];
          document.forms.finalCart.elements.ovTotal.value = orderFields[9];



});

window.addEventListener("load", function() {

        document.getElementById("subOrder").onclick = sub;
        document.getElementById("Fname").oninput = validateFirstName;
        document.getElementById("Lname").oninput = validateLastName;
        document.getElementById("addy").oninput = validateAddress;
        document.getElementById("zip").oninput = validateZip;
        document.getElementById("phone").oninput = validatePhone;
        document.getElementById("email").oninput = validateEmail;
        document.getElementById("credit").oninput = validateCard;
        document.getElementById("cvc").oninput = validateCVC;

      });

function sub() {

  validateFirstName();
  validateLastName();
  validateAddress();
  validateZip();
  validateEmail();
  validateCard();
  validateCVC();

}

function validateFirstName() {

   var fName = document.getElementById("Fname");

   if (fName.validity.valueMissing) {

      fName.setCustomValidity("Enter your first name");

   } else {

      fName.setCustomValidity("");

   }
}

function validateLastName() {

   var lName = document.getElementById("Lname");

   if (lName.validity.valueMissing) {

      lName.setCustomValidity("Enter your last name");

   } else {

      lName.setCustomValidity("");

   }
}

function validateAddress() {

   var live = document.getElementById("addy");

   if (live.validity.valueMissing) {

      live.setCustomValidity("Enter your home address");

   } else {

      live.setCustomValidity("");

   }
}

function validateZip() {

    var zip = document.getElementById("zip");

    if (zip.validity.valueMissing) {

      zip.setCustomValidity("Enter your zip code");

    } else if ((/^\d{5}$/.test(zip.value) === false)) {

     zip.setCustomValidity("Enter a valid zip code");

    } else {

     zip.setCustomValidity("");

    }

}

function validatePhone() {

    var phone = document.getElementById("phone");

    if (phone.validity.valueMissing) {

      phone.setCustomValidity("Enter your phone number");

    } else if ((/^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$/.test(phone.value) === false)) {

     phone.setCustomValidity("Enter a valid phone number");

    } else {

     phone.setCustomValidity("");

    }

}

function validateEmail() {

   var mail = document.getElementById("email");

   if (mail.validity.valueMissing) {

      mail.setCustomValidity("Enter your email address");

   } else {

      mail.setCustomValidity("");

   }
}

function validateCard() {

  var card = document.getElementById("credit");

  if (card.validity.valueMissing) {

    card.setCustomValidity("Enter your credit card number");

  } else if ((/^\d{16}$/.test(card.value) === false)) {

   card.setCustomValidity("Enter a valid credit card number");

  } else {

   card.setCustomValidity("");

  }

}

function validateCVC() {

    var cvc = document.getElementById("cvc");

    if (cvc.validity.valueMissing) {

      cvc.setCustomValidity("Enter your CVC number");

    } else if ((/^\d{3}$/.test(cvc.value) === false)) {

     cvc.setCustomValidity("Enter a valid CVC number");

    } else {

     cvc.setCustomValidity("");

    }
}
