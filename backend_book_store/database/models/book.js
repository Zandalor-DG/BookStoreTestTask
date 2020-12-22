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
      Book.belongsTo(models.Author, {
        foreignKey: 'authorId',
      });
      Book.belongsTo(models.Publish, {
        foreignKey: 'publishId',
      });
      Book.belongsTo(models.File, {
        foreignKey: 'coverId',
        //as: 'cover',
        onDelete: 'CASCADE',
      });
      Book.belongsToMany(models.Genre, {
        through: 'Genre_Book',
        as: 'Genre',
        //foreignKey: 'bookId',
        foreignKey: 'bookId',
      });
      // define association here
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      publishId: DataTypes.INTEGER,
      coverId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
