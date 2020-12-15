const express = require('express');
const accountController = require('../controllers/accountController');
const tokenChecker = require('../middleware/tokenChecker');

const accountRouter = express.Router();

accountRouter.post('/signup', accountController.signUp);
accountRouter.post('/signin', accountController.signIn);
accountRouter.get(
  '/signinbytoken',
  tokenChecker,
  accountController.signInByToken
);
accountRouter.post('/uploadavatar', accountController.uploadAvatar);

module.exports = accountRouter;
