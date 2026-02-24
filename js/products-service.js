export class ProductsService {
  static #instance;

  constructor() {
    if (!ProductsService.#instance) {
      ProductsService.#instance = this;
    } else {
      return ProductsService.#instance;
    }
  }

  async getProducts() {
    if (!this.products) {
      const response = await fetch("api/products.json");
      this.products = await response.json();
      return this.products;
    } else {
      return this.products;
    }
  }

  async getProductById(id) {
    const products = await this.getProducts();
    return products.find((product) => product.id === id);
  }
}
