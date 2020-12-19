'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.File.hasOne(Book, {
      //   foreignKey: 'coverId',
      //   as: 'cover',
      //   onDelete: 'CASCADE',
      //   /* options */
      // });
      Book.hasOne(models.File, {
        foreignKey: 'coverId',
        //as: 'cover',
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING,
      price: DataTypes.INTEGER,
      publishHouse: DataTypes.STRING,
      coverId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
