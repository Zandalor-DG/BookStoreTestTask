const cls = require('cls-hooked');
const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const nameSpace = cls.createNamespace('purchase-of-goods');
Sequelize.useCLS(nameSpace);

sequelize.Transaction;
