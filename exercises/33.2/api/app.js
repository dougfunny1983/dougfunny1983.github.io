const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'Hello World!' }));

const middleware = (req, res, next) => {
  const { senha } = req.body;
  if (senha.length < 6) {
    return res.status(500).json({ message: 'error' });
  }
  next();
};

app.post('/login', middleware, (req, res) => {
  const { email, senha } = req.body;
  return res.status(200).json({ email, senha });
});

module.exports = app;
