var modalOverlay = document.querySelector(".modal-overlay");
var modalAddToCart = document.querySelector(".modal-add-to-cart");
var modalForm = modalAddToCart.querySelector("form");

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!modalOverlay.classList.contains("modal-overlay--hidden")
    && !modalAddToCart.classList.contains("modal-add-to-cart--hidden")) {
      modalOverlay.classList.add("modal-overlay--hidden");
      modalAddToCart.classList.add("modal-add-to-cart--hidden");
    }
  }
});

modalOverlay.addEventListener("click", function(event) {
  if (!modalOverlay.classList.contains("modal-overlay--hidden")
  && !modalAddToCart.classList.contains("modal-add-to-cart--hidden")) {
    modalOverlay.classList.add("modal-overlay--hidden");
    modalAddToCart.classList.add("modal-add-to-cart--hidden");
  }
});

modalForm.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!modalOverlay.classList.contains("modal-overlay--hidden")
  && !modalAddToCart.classList.contains("modal-add-to-cart--hidden")) {
    modalOverlay.classList.add("modal-overlay--hidden");
    modalAddToCart.classList.add("modal-add-to-cart--hidden");
  }
});
