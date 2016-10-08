var orderForm = document.querySelector(".order-form");
var firstname = orderForm.querySelector("#name");
var surname = orderForm.querySelector("#surname");
var patronymic = orderForm.querySelector("#patronymic");
var tel = orderForm.querySelector("#tel");
var email = orderForm.querySelector("#email");
var commentary = orderForm.querySelector("#commentary");
var storageFirstname = localStorage.getItem("firstname");
var storageSurname = localStorage.getItem("surname");
var storagePatronymic = localStorage.getItem("patronymic");
var storageTel = localStorage.getItem("tel");
var storageEmail = localStorage.getItem("email");

orderForm.addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("firstname", firstname.value);
  localStorage.setItem("surname", surname.value);
  localStorage.setItem("patronymic", patronymic.value);
  localStorage.setItem("tel", tel.value);
  localStorage.setItem("email", email.value);
});

window.addEventListener("load", function(event) {
  firstname.value = storageFirstname;
  surname.value = storageSurname;
  patronymic.value = storagePatronymic;
  tel.value = storageTel;
  email.value = storageEmail;
});
