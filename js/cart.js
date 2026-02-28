const cart = document.querySelector(".cart");
const buttonCloseModal = document.querySelector(".cart__modal-container-icon-close");


buttonCloseModal.addEventListener("click", () => {
    cart.classList.add("not-visible");
})

