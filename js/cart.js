import { ProductsService } from "./products-service.js";

const cart = document.querySelector(".cart");
const fon = document.querySelector(".cart__modal-fon");
const cartModal = document.querySelector(".cart__modal");
const buttonCloseModal = document.querySelector(
  ".cart__modal-container-icon-close",
);

buttonCloseModal.addEventListener("click", () => {
  cart.classList.add("not-visible");
  document.body.classList.remove('no-scroll');
});

fon.addEventListener("click", (e) => {
  if (!e.target.contains(cartModal)) {
    cart.classList.add("not-visible");
    document.body.classList.remove('no-scroll');
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
    let cartHtml = "";

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
    }

    this.container.innerHTML = cartHtml;
  }

  createCartHtml(product) {
    return `
  <div class = "cart__row" data-id = "${product.id}">
    <div class = "cart__row-container-image">
      <img class = "cart__row-image" src= "${product.image}" alt = "${product.typeProduct}" >
    </div>
    <a class = "cart__row-header" href = "#" >${product.typeProduct}</a>
    <div class = "cart__row-container-input">
      <input class = "cart__row-input" type="number" value = ${this.cart[product.id]}>
      <div class = "cart__row-container-triangles">
        <div class="cart__row-triangle-up"></div>
        <div class="cart__row-triangle-down"></div>
      </div>
    </div>
    <div class = "cart__row-price">$${(Number(product.price)*this.cart[product.id]).toFixed(2)}USD</div>
    <div class = "cart__row-container-icon-del-product">
      <svg class = "cart__row-icon-del-product" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path class = "cart__row-icon-path-del-product" fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z"></path>
      </svg>
    </div>
    </div>
  `;
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
