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
shoppingCartRouter.post(
  '/removeitem',
  tokenChecker,
  shoppingCartController.postRemoveItemCart
);
shoppingCartRouter.delete(
  '/deleteallitems',
  tokenChecker,
  shoppingCartController.deleteDeleteAllItems
);
shoppingCartRouter.delete(
  '/deleteitem',
  tokenChecker,
  shoppingCartController.deleteDeleteItem
);

module.exports = shoppingCartRouter;
