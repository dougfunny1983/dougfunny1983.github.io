const ProductModel = require('../models/productModel');

const getAllProducts = async (_req, res) => {
  const products = await ProductModel.getAll();
  return res.status(200).json(products)
}

const getProductById = async (req, res) => {
  console.log('--------------------*******----------')
  const product = await ProductModel.getById(req.params.id);
  if (product === null)     
    return res.status(404).send({ message: 'Produto não encontrado' });
  return res.status(200).json(product);
}

const createProduct = (req, res) => {
  const { id, name, brand } = req.body;

  try {
    const newProduct = new ProductModel(id, name, brand);
    newProduct.add();

    res.status(200)
    res.json(newProduct);
  } catch (e) {
    res.status(500)
    res.send({ message: 'Algo deu errado' });
  }
}

const deleteProductById =  (req, res) => {
  try {
    const products = new ProductModel().delete(req.params.id);

    res.status(200)
    res.json(products);
  } catch (e) {
    res.status(500)
    res.send({ message: 'Algo deu errado' });
  }
}

const editProductById = (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = new ProductModel(name, brand).addOrUpdate(req.params.id);

    res.status(200)
    res.json(products);
  } catch (e) {
    res.status(500)
    res.send({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById
}