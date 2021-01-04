'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SubTransaction.belongsTo(models.Transaction, {
        foreignKey: 'transactionId',
      });
      SubTransaction.hasMany(models.Book, {
        foreignKey: 'id',
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  SubTransaction.init(
    {
      transactionId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      original_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SubTransaction',
    }
  );
  return SubTransaction;
};
