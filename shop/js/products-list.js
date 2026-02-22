// fetch("../../api/shop/products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     renderProducts(data);
//   });

const response = await fetch("../../api/shop/products.json");
const products = await response.json();

renderProducts(products);


function renderProducts(products) {
  let productsHtml = [];
  for (const product of products) {
    if (!product.version && !product.oldPrice && !product.preOrder) {
      productsHtml.push(`
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
            <a class="main__product-buy" href="#">Buy</a>
          </article>
            `);
    } else if (product.version && !product.oldPrice && !product.preOrder) {
      productsHtml.push(`
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
            <a class="main__product-buy" href="#">Buy</a>
          </article>`);
    } else if (product.version && product.oldPrice && !product.preOrder) {
      productsHtml.push(`
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
            <a class="main__product-buy" href="#">Buy</a>
          </article>
        `);
    } else if (!product.version && !product.oldPrice && product.preOrder) {
      productsHtml.push(`
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
            <a class="main__product-buy" href="#">Buy</a>
          </article>   
            `);
    }
  }
  document.querySelector(".main__container-products").innerHTML = productsHtml.join("");
};


