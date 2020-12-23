const express = require('express');
const bookStoreController = require('../controllers/bookStoreController');

const bookStoreRouter = express.Router();

bookStoreRouter.get('/allbooks', bookStoreController.allBooks);

bookStoreRouter.get(
  '/allfilteringoptions',
  bookStoreController.allFilteringOptions
);

module.exports = bookStoreRouter;
