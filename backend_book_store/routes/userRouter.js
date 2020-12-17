const express = require('express');
const userController = require('../controllers/userController');
const tokenChecker = require('../middleware/tokenChecker');

const userRouter = express.Router();

userRouter.put('/putuser', tokenChecker, userController.putUser);
userRouter.delete('/delete', tokenChecker, userController.deleteUser);
userRouter.get('/getall', tokenChecker, userController.getAllUsers);
userRouter.post('/uploadavatar', tokenChecker, userController.uploadAvatar);

module.exports = userRouter;
