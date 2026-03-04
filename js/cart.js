import { ProductsService } from "./products-service.js";

const cart = document.querySelector(".cart");
const fon = document.querySelector(".cart__modal-fon");
const cartModal = document.querySelector(".cart__modal");
const buttonCloseModal = document.querySelector(
  ".cart__modal-container-icon-close",
);

buttonCloseModal.addEventListener("click", () => {
  cart.classList.add("not-visible");
  document.body.classList.remove("no-scroll");
});

fon.addEventListener("click", (e) => {
  if (!e.target.contains(cartModal)) {
    cart.classList.add("not-visible");
    document.body.classList.remove("no-scroll");
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

    this.containerPromoCodeTotal = document.querySelector(
      ".cart__container-promo-code-total",
    );

    this.renderCart();
  }

  async renderCart() {
    let quantityOfProducts = 0;
    let cartHtml = "";
    let promoCodeTotal = "";
    let total = 0;

    for (let count in this.cart) {
      quantityOfProducts += this.cart[count];
    }
    document.querySelector(".icon-cart__container").innerHTML =
      `${quantityOfProducts > 9 ? "9+" : quantityOfProducts}`;

    for (const productId in this.cart) {
      const product = await this.productsService.getProductById(
        Number(productId),
      );
      cartHtml += this.createCartHtml(product);
      total += this.cart[productId] * Number(product.price);
    }

    promoCodeTotal = `
        <div class = "cart__container-promo-code">
          <a class = "cart__promo-code-header" href = "#">Promo code</a>
          <div class = "cart__promo-code-container-input">
            <input type = "text" class = "cart__promo-code-input" placeholder = "Enter promo code">
            <button class = "cart__promo-code-button">OK</button>
          </div>
          <p class = "cart__promo-code-error-message cart__promo-code-error-message-not-visible">Promo code can't be applied</p>
        </div>
        <p class = "cart__total">Total: ${total.toFixed(2)}USD</p>
    `;

    this.container.innerHTML = cartHtml;
    this.containerPromoCodeTotal.innerHTML = promoCodeTotal;

    this.container
      .querySelectorAll(".cart__row-container-icon-del-product")
      .forEach((element) => {
        element.addEventListener("click", (e) => {
          this.deleteProduct(e.target.dataset.id);
        });
      });

    this.container
      .querySelectorAll(".cart__row-triangle-up")
      .forEach((element) => {
        element.addEventListener("click", (e) => {
          this.addProductOperation(e.target.dataset.id);
        });
      });

    this.container
      .querySelectorAll(".cart__row-triangle-down")
      .forEach((element) => {
        element.addEventListener("click", (e) => {
          this.deleteProductOperation(e.target.dataset.id);
        });
      });

    this.container.querySelectorAll(".cart__row-input").forEach((element) => {
      element.addEventListener("input", (e) => {
        if (e.target.value === "") {
          element.value = 1;
        }
      });
    });

    this.containerPromoCodeTotal
      .querySelector(".cart__promo-code-button")
      .addEventListener("click", () => {
        if (
          this.containerPromoCodeTotal.querySelector(".cart__promo-code-input")
            .value === ""
        ) {
          this.containerPromoCodeTotal
            .querySelector(".cart__promo-code-input")
            .classList.add("cart__promo-code-input-error");

          this.containerPromoCodeTotal
            .querySelector(".cart__promo-code-error-message")
            .classList.remove("cart__promo-code-error-message-not-visible");
        }
      });

    this.containerPromoCodeTotal
      .querySelector(".cart__promo-code-input")
      .addEventListener("input", (e) => {
        if (e.target.value !== "") {
          e.target.classList.remove("cart__promo-code-input-error");

          this.containerPromoCodeTotal
            .querySelector(".cart__promo-code-error-message")
            .classList.add("cart__promo-code-error-message-not-visible");
        }
      });
  }

  createCartHtml(product) {
    return `
  <div class = "cart__row" data-id = "${product.id}">
    <div class = "cart__row-container-image">
      <img class = "cart__row-image" src= "${product.image}" alt = "${product.typeProduct}" >
    </div>
    <div class = "cart__row-container-content">
    <a class = "cart__row-header" href = "#" >${product.typeProduct}</a>
    <div class = "cart__row-container-input">
      <input class = "cart__row-input" type="number" value = ${this.cart[product.id]}>
      <div class = "cart__row-container-triangles">
        <div class="cart__row-triangle-up" data-id = "${product.id}"></div>
        <div class="cart__row-triangle-down" data-id = "${product.id}"></div>
      </div>
    </div>
    <div class = "cart__row-price">$${(Number(product.price) * this.cart[product.id]).toFixed(2)}USD</div>
    </div>
    <div class = "cart__row-container-icon-del-product" data-id = "${product.id}">
      <svg data-id = "${product.id}"  class = "cart__row-icon-del-product" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path data-id = "${product.id}" class = "cart__row-icon-path-del-product" fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z"></path>
      </svg>
    </div>
    </div>
  `;
  }

  addProductOperation(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
    this.saveCart();
    this.renderCart();
  }
  deleteProductOperation(id) {
    if (this.cart[id] > 1) {
      this.cart[id] -= 1;
    } else {
      this.cart[id] = 1;
    }
    this.saveCart();
    this.renderCart();
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  addProduct(id) {
    this.addProductOperation(id);
    this.saveCart();
    this.renderCart();
  }

  deleteProduct(id) {
    for (const key in this.cart) {
      if (key === id) {
        delete this.cart[key];
      }
    }
    this.saveCart();
    this.renderCart();
  }
}

new Cart();
