require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const checkerUser = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return next();
  }
  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (err) {
      return next();
    }
    req.userId = decoded;
    next();
  });
};

module.exports = checkerUser;
