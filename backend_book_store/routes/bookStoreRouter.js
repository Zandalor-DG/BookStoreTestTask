const express = require('express');
const bookStoreController = require('../controllers/bookStoreController');
const tokenChecker = require('../middleware/tokenChecker');

const bookStoreRouter = express.Router();

bookStoreRouter.get('/allbooks', bookStoreController.allBooks);
bookStoreRouter.get(
  '/allfilteringoptions',
  bookStoreController.allFilteringOptions
);
bookStoreRouter.get('/getbook', bookStoreController.getBook);
bookStoreRouter.post('/comment', tokenChecker, bookStoreController.commentBook);

module.exports = bookStoreRouter;
