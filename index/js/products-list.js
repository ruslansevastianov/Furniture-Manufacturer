// fetch("api/home/products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     renderProducts(data);
//   });



const response = await fetch("api/home/products.json");
const products = await response.json();

renderProducts(products);


function renderProducts(products) {
  let productsHtml = [];
  for (const product of products) {
    if (!product.version && !product.oldPrice) {
      productsHtml.push(`
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
        <button class="featured-products__button-buy">Buy Now</button>
      </div>
            `);
    } else if (product.version && !product.oldPrice) {
      productsHtml.push(`
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
        <button class="featured-products__button-buy">Buy Now</button>
      </div>
          `);
    } else if (product.version && product.oldPrice) {
      productsHtml.push(`
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
        <button class="featured-products__button-buy">Buy Now</button>
      </div>
        `);
    } 
  }
  document.querySelector(".featured-products__container-products").innerHTML = productsHtml.join("");
};


