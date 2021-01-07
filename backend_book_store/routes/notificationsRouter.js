const express = require('express');
const notificationController = require('../controllers/notificationController');
const tokenChecker = require('../middleware/tokenChecker');

const notificationRouter = express.Router();

notificationRouter.put(
  '/updateoneitem',
  tokenChecker,
  notificationController.updateOneItem
);

notificationRouter.delete(
  '/deleteoneitem',
  tokenChecker,
  notificationController.deleteOneItem
);

notificationRouter.get(
  '/allnotifications',
  tokenChecker,
  notificationController.getAllNotifications
);

notificationRouter.delete(
  '/deleteallitems',
  tokenChecker,
  notificationController.deleteAllItems
);

notificationRouter.put(
  '/updateallitems',
  tokenChecker,
  notificationController.updateAllItems
);

module.exports = notificationRouter;
