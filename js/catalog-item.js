var cartBtn = document.querySelectorAll(".catalog-item__cart")

for (i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener("click", function(event) {
    event.preventDefault();
    if (modalOverlay.classList.contains("modal-overlay--hidden")
    && modalAddToCart.classList.contains("modal-add-to-cart--hidden")) {
      modalOverlay.classList.remove("modal-overlay--hidden");
      modalAddToCart.classList.remove("modal-add-to-cart--hidden");
    }
});
}
