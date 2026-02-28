const cart = document.querySelector(".cart");
const cartModal = document.querySelector(".cart__modal");
const buttonCloseModal = document.querySelector(
  ".cart__modal-container-icon-close",
);

buttonCloseModal.addEventListener("click", () => {
  cart.classList.add("not-visible");
});

cart.addEventListener("click", (e) => {
  if (!e.target.contains(cartModal)) {
    cart.classList.add("not-visible");
  }
});
