const isTokenValid = (token = '') => {
  const regex = /^([a-zA-Z0-9 _-]+)$/;
  return token.length === 16 && regex.test(token);
};

const log = (req, _res, next) => {
  console.log(req.body, new Date());
  next();
};

const checkAuthToken = (req, res, next) => {
  if (isTokenValid(req.headers.authorization)) {
    next();
  } else {
    res.status(401).send({ message: 'Token inválido!' });
  }
};

const rescue = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (e) {
    res.status(500).json({ message: e.message, trace: e.stack });
    next(e);
  }
};

module.exports = {
  checkAuthToken,
  log,
  rescue,
};
