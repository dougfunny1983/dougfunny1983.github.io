const readAndWrite = require('../service');

class Product {
  constructor(name, brand) {
    this.id = null;
    this.name = name;
    this.brand = brand;
  }

  static async getAll() {
    const products = await readAndWrite('read', 'products.json');
    return products;
  }

  static async getById(id) {
    console.log('entrei ******************')
    const rawData = await readAndWrite('read', 'products.json');
    console.log('************************************');
    console.log(id)
    console.log('************************************');
    const product = rawData.find(
      product => product.id === parseInt(id),
    );

    return product;
  }

  async add() {
    const products = await readAndWrite('read', 'products.json');

    this.id = products[products.length - 1].id + 1;
    products.push(this);

    await readAndWrite('write', 'products.json', products);

    return this;
  }

  static async delete(id) {
    const rawData = await readAndWrite('read', 'products.json');
    const products = rawData.filter(
      product => product.id !== parseInt(id),
    );

    await readAndWrite('write', 'products.json', products);

    return products;
  }

  async addOrUpdate(id) {
    const products = await readAndWrite('read', 'products.json');

    const product = products.find(product => product.id === parseInt(id));

    if (product) {
      product.name = this.name;
      product.brand = this.brand;
    } else {
      this.id = products[products.length - 1].id + 1;
      products.push(this);
    }

    await readAndWrite('write', 'products.json', products);

    return products;
  }
}

module.exports = Product;
