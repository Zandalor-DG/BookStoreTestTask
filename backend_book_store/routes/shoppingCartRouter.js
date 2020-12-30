const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');
const tokenChecker = require('../middleware/tokenChecker');

const shoppingCartRouter = express.Router();

shoppingCartRouter.get(
  '/all',
  tokenChecker,
  shoppingCartController.getAllItemsCart
);
shoppingCartRouter.post(
  '/additem',
  tokenChecker,
  shoppingCartController.postAddItemCart
);

module.exports = shoppingCartRouter;
