var topSalesBtn = document.querySelector(".top-sales__btn");

topSalesBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (modalOverlay.classList.contains("modal-overlay--hidden")
  && modalAddToCart.classList.contains("modal-add-to-cart--hidden")) {
    modalOverlay.classList.remove("modal-overlay--hidden");
    modalAddToCart.classList.remove("modal-add-to-cart--hidden");
  }
});
