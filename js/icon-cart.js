const iconButton = document.querySelector(".icon-cart");
const cart = document.querySelector(".cart");

iconButton.addEventListener("click", () => {
  if (cart.classList.contains("not-visible")) {
    cart.classList.remove("not-visible");
  }
});
