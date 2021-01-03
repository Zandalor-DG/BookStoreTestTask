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
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Transaction.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: DataTypes.INTEGER,
      transaction_name: DataTypes.STRING,
      //totalPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Transaction',
    }
  );
  return Transaction;
};
