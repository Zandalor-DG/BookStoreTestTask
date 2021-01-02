const express = require('express');
const transactionController = require('../controllers/transactionController');
const tokenChecker = require('../middleware/tokenChecker');

const transactionRouter = express.Router();

transactionRouter.get(
  '/all',
  tokenChecker,
  transactionController.allTransactionItem
);

transactionRouter.post(
  '/settransaction',
  tokenChecker,
  transactionController.postSetTransaction
);

module.exports = transactionRouter;
