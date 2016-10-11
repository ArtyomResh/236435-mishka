var modalOverlay = document.querySelector(".modal-overlay");
var modalSizes = document.querySelector(".modal-sizes");
var modalForm = modalSizes.querySelector("form");

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!modalOverlay.classList.contains("modal-overlay--hidden")
    && !modalSizes.classList.contains("modal-sizes--hidden")) {
      modalOverlay.classList.add("modal-overlay--hidden");
      modalSizes.classList.add("modal-sizes--hidden");
    }
  }
});

modalOverlay.addEventListener("click", function(event) {
  if (!modalOverlay.classList.contains("modal-overlay--hidden")
  && !modalSizes.classList.contains("modal-sizes--hidden")) {
    modalOverlay.classList.add("modal-overlay--hidden");
    modalSizes.classList.add("modal-sizes--hidden");
  }
});

modalForm.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!modalOverlay.classList.contains("modal-overlay--hidden")
  && !modalSizes.classList.contains("modal-sizes--hidden")) {
    modalOverlay.classList.add("modal-overlay--hidden");
    modalSizes.classList.add("modal-sizes--hidden");
  }
});
