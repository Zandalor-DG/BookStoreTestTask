'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub - transction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sub - transction.init({
    transaction_name: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    original_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sub-transction',
  });
  return Sub - transction;
};