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

    // this.addEventListeners();
    // this.renderCart();
  }


  // addEventListeners() {
  //   document.querySelector(".cart").addEventListener("click", this.renderCart.bind(this));
  //   document.querySelector(".order").addEventListener("click", this.order.bind(this));
  // }

  // async renderCart() {
  //   let total = 0;
    
  //   let cartHtml = '';

  //   for (const productId in this.cart) {
  //     const product = await this.productsService.getProductById(productId);
  //     cartHtml += this.createCartHtml(product);
  //     total += product.price * this.cart[productId];
  //   }
    
    // cartHtml += ` <div class="row">
    //                       <div class="col-5"><strong>TOTAL</strong></div>
    //                       <div class="col-3"><strong>$${total.toFixed(2)}</strong></div>
    //                    </div>`;

    // this.container.innerHTML = cartHtml;




    // this.container
    //   .querySelectorAll(".plus")
    //   .forEach((el) => el.addEventListener("click", (ev) => this.changeQuantity(ev, this.addProductOperation)));
    // this.container
    //   .querySelectorAll(".minus")
    //   .forEach((el) => el.addEventListener("click", (ev) => this.changeQuantity(ev, this.deleteProductOperation)));
    // document.querySelector(".cart-badge").innerHTML = Object.keys(this.cart).length;

  // }
  


  // createCartHtml(product) {
  //   return `<div class="row" data-id="${product.id}"> 
  //             <div class="col-5">${product.title}</div>
  //             <div class="col-3">${product.price}</div>
  //             <div class="col-2">${this.cart[product.id]}</div>
  //             <div class="col-1"><button data-id=${product.id} class="btn btn-sm plus">+</button></div>
  //             <div class="col-1"><button data-id=${product.id} class="btn btn-sm minus">-</button></div>
  //           </div>`;
  // }

  // changeQuantity(ev, operation) {
  //   ev.stopPropagation();
  //   operation.call(this, ev.target.dataset.id);
  //   this.saveCart();
  //   this.renderCart();
  // }


  addProductOperation(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
  }
  
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  // deleteProductOperation(id) {
  //   if (this.cart[id] > 1) {
  //     this.cart[id] -= 1;
  //   } else {
  //     delete this.cart[id];
  //   }
  // }

  addProduct(id) {
    this.addProductOperation(id);
    this.saveCart();
    // this.renderCart();
  }


}


new Cart();






