const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers/productController')
const middlewares = require('../middlewares')

const app = express();

app.use(express.json());
// app.use(middlewares.log)
app.use(middlewares.checkAuthToken)

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', middlewares.rescue(controllers.getAllProducts));

app.get('/product/:id', controllers.getProductById);

app.post('/product', middlewares.rescue(controllers.createProduct));

app.delete('/product/:id', middlewares.rescue(controllers.deleteProductById));

app.put('/product/:id', middlewares.rescue(controllers.editProductById));

module.exports = app;