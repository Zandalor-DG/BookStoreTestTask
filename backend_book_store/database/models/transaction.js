'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.hasMany(models.SubTransaction, {
        foreignKey: 'transaction_name',
        as: 'SubTransaction',
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Transaction.init(
    {
      userId: DataTypes.INTEGER,
      transaction_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Transaction',
    }
  );
  return Transaction;
};
