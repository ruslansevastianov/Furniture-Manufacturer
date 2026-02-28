import { ProductsService } from "../../js/products-service.js";
import { Cart } from "../../js/cart.js";

export class ProductsList {
  constructor() {
    this.container = document.querySelector(".main__container-products");
    this.productsService = new ProductsService();
    this.renderProducts();
  }

  async renderProducts() {
    let productsListHtml = "";

    const products = await this.productsService.getProducts();

    products.forEach((product) => {
      productsListHtml += this.createProductHtml(product);
    });
    this.container.innerHTML = productsListHtml;

    document.querySelectorAll(".main__product-buy").forEach((btn) => {
      btn.addEventListener("click", this.addProductToCart.bind(this));
    });
  }

  createProductHtml(product) {
    if (!product.version && !product.oldPrice && !product.preOrder) {
      return `
          <article class="main__product-card">
            <a class="main__link-product" href="#">
              <div class="main__container-image-product">
                <img
                  class="main__image-product"
                  src="${product.image}"
                  alt="${product.typeProduct}"
                />
              </div>
              <p class="main__header-type-product">${product.typeProduct}</p>
            </a>
            <p class="main__product-price">${product.price} USD</p>
            <a class="main__product-buy" href="#" data-id = ${product.id}>Buy</a>
          </article>
            `;
    } else if (product.version && !product.oldPrice && !product.preOrder) {
      return `
            <article class="main__product-card">
            <a class="main__link-product" href="#">
              <div class="main__container-image-product">
                <img
                  class="main__image-product"
                  src="${product.image}"
                  alt="${product.typeProduct}"
                />
                <p class="main__news-product">${product.version}</p>
              </div>
              <p class="main__header-type-product">${product.typeProduct}</p>
            </a>
            <p class="main__product-price">${product.price} USD</p>
            <a class="main__product-buy" href="#" data-id = ${product.id}>Buy</a>
          </article>`;
    } else if (product.version && product.oldPrice && !product.preOrder) {
      return `
          <article class="main__product-card">
            <a class="main__link-product" href="#">
              <div class="main__container-image-product">
                <img
                  class="main__image-product"
                  src="${product.image}"
                  alt="${product.typeProduct}"
                />
                <p class="main__news-product">${product.version}</p>
              </div>
              <p class="main__header-type-product">${product.typeProduct}</p>
            </a>
            <div class="main__product-old-price-price">
            <s class="main__product-sale-price">${product.oldPrice} USD</s>
            <p class="main__product-price">${product.price} USD</p>
            </div>
            <a class="main__product-buy" href="#" data-id = ${product.id}>Buy</a>
          </article>
        `;
    } else if (!product.version && !product.oldPrice && product.preOrder) {
      return `
          <article class="main__product-card">
            <a class="main__link-product" href="#">
              <div>
                <div class="main__container-image-product">
                  <img
                    class="main__image-product"
                    src="${product.image}"
                    alt="${product.typeProduct}"
                  />
                <p class="main__pre-order-product">Pre-order</p>
                </div>
              </div>
              <p class="main__header-type-product">${product.typeProduct}</p>
            </a>
            <p class="main__product-price">${product.price} USD</p>
            <a class="main__product-buy" href="#" data-id = ${product.id}>Buy</a>
          </article>   
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
