import { ProductsService } from "../../js/products-service.js";
import { Cart } from "../../js/cart.js";

export class ProductsList {
  constructor() {
    this.container = document.querySelector(
      ".featured-products__container-products",
    );
    this.productsService = new ProductsService();
    this.renderProducts();
  }

  async renderProducts() {
    let productsListHtml = "";

    const products = await this.productsService.getProducts();
    const targetListId = [15, 1, 9, 8, 10, 5]; // id товарів, які ми хочемо відображати на головній сторінці, у вказаному порядку
    let resultListProducts = []; // масив для збереження товарів, які ми хочемо відобразити на головній сторінці

    for (const id of targetListId) {
      const product = products.find((product) => product.id === id);
      resultListProducts.push(product);
    }

    resultListProducts.forEach((product) => {
      productsListHtml += this.createProductHtml(product);
    });

    this.container.innerHTML = productsListHtml;

    document
      .querySelectorAll(".featured-products__button-buy")
      .forEach((btn) => {
        btn.addEventListener("click", this.addProductToCart.bind(this));
      });
  }

  createProductHtml(product) {
    if (!product.version && !product.oldPrice) {
      return `
      <div class="featured-products__container-product">
        <a class="featured-products__link-company" href="#">
          <div class="featured-products__container-image-product">
            <img
              class="featured-products__image-product"
              src="${product.image}"
              alt="${product.typeProduct}"
            />
          </div>
          <p class="featured-products__header-version">${product.typeProduct}</p>
        </a>
        <p class="featured-products__price">${product.price} USD</p>
        <button class="featured-products__button-buy" data-id = ${product.id}>Buy Now</button>
      </div>
            `;
    } else if (product.version && !product.oldPrice) {
      return `
      <div class="featured-products__container-product">
        <a class="featured-products__link-company" href="#">
          <p class="featured-products__version">${product.version}</p>
          <div class="featured-products__container-image-product">
            <img
              class="featured-products__image-product"
              src="${product.image}"
              alt="${product.typeProduct}"
            />
          </div>
          <p class="featured-products__header-version">${product.typeProduct}</p>
        </a>
        <p class="featured-products__price">${product.price} USD</p>
        <button class="featured-products__button-buy" data-id = ${product.id}>Buy Now</button>
      </div>
          `;
    } else if (product.version && product.oldPrice) {
      return `
      <div class="featured-products__container-product">
        <a class="featured-products__link-company" href="#">
          <p class="featured-products__version">${product.version}</p>
          <div class="featured-products__container-image-product">
            <img
              class="featured-products__image-product"
              src="${product.image}"
              alt="${product.typeProduct}"
            />
          </div>
          <p class="featured-products__header-version">${product.typeProduct}</p>
        </a>
        <div class="featured-products__old-price-price">
          <s class="featured-products__old-price">${product.oldPrice} USD</s>
          <p class="featured-products__price">${product.price}  USD</p>
        </div>
        <button class="featured-products__button-buy" data-id = ${product.id}>Buy Now</button>
      </div>
        `;
    }
  }

  addProductToCart(event) {
    const id = event.target.dataset.id;
    const cart = new Cart();
    cart.addProduct(id);
  }
}

new ProductsList();
