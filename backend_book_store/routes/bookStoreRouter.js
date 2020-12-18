const express = require('express');
const bookStoreController = require('../controllers/bookStoreController');
const paginateMiddleware = require('../middleware/paginateMiddleware');

const bookStoreRouter = express.Router();

bookStoreRouter.post(
  '/allbooks',
  paginateMiddleware,
  bookStoreController.allBooks
);

module.exports = bookStoreRouter;
