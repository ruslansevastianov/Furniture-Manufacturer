import { ProductsService } from "./products-service.js";

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



export class Cart {
  static #instance;

  constructor() {
    if (Cart.#instance) return Cart.#instance;
    Cart.#instance = this;

    this.container = document.querySelector(".cart__container-products");
    this.productsService = new ProductsService();
    this.cart = JSON.parse(localStorage.getItem("cart") ?? "{}");

    this.renderCart();
  }

  async renderCart() {
    let quantityOfProducts = 0;

    for (let count in this.cart) {
      quantityOfProducts += this.cart[count];
    }

    document.querySelector(".icon-cart__container").innerHTML =
      `${quantityOfProducts > 9 ? "9+" : quantityOfProducts}`;
  }

  addProductOperation(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  addProduct(id) {
    this.addProductOperation(id);
    this.saveCart();
    this.renderCart();
  }
}

new Cart();
