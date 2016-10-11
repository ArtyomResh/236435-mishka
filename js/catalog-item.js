var cartBtn = document.querySelectorAll(".catalog-item__cart")

for (i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener("click", function(event) {
    event.preventDefault();
    if (modalOverlay.classList.contains("modal-overlay--hidden")
    && modalSizes.classList.contains("modal-sizes--hidden")) {
      modalOverlay.classList.remove("modal-overlay--hidden");
      modalSizes.classList.remove("modal-sizes--hidden");
    }
});
}
