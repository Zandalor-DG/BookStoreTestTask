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
      Book.belongsTo(models.Author, {
        foreignKey: 'authorId',
      });
      Book.belongsTo(models.Publish, {
        foreignKey: 'publishId',
      });
      Book.belongsTo(models.File, {
        foreignKey: 'coverId',
        onDelete: 'CASCADE',
      });
      Book.belongsToMany(models.User, {
        through: 'Rate',
        as: 'Rate_book',
        foreignKey: 'bookId',
      });
      Book.belongsToMany(models.User, {
        through: 'Cart',
        as: 'Cart_user',
        foreignKey: 'bookId',
      });
      Book.belongsToMany(models.User, {
        through: 'Comment',
        as: 'Comments_user',
        foreignKey: 'bookId',
      });
      Book.belongsToMany(models.Genre, {
        through: 'Genre_Book',
        as: 'Genre',
        foreignKey: 'bookId',
      });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      publishId: DataTypes.INTEGER,
      coverId: DataTypes.INTEGER,
      theYearOfPublishing: DataTypes.DATE,
      language: DataTypes.STRING,
      numberOfPages: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
