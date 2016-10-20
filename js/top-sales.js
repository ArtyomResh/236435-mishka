var topSalesBtn = document.querySelector(".top-sales__btn");

topSalesBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (modalOverlay.classList.contains("modal-overlay--hidden")
  && modalSizes.classList.contains("modal-sizes--hidden")) {
    modalOverlay.classList.remove("modal-overlay--hidden");
    modalSizes.classList.remove("modal-sizes--hidden");
  }
});
