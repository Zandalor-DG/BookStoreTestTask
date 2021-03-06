'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Book, {
        through: 'Rate',
        as: 'Rate_book',
        foreignKey: 'userId',
      });
      User.belongsToMany(models.Book, {
        through: 'Cart',
        as: 'Cart_user',
        foreignKey: 'userId',
      });
      User.belongsToMany(models.Book, {
        through: 'Comment',
        as: 'Comments_user',
        foreignKey: 'userId',
      });
      User.belongsTo(models.File, {
        foreignKey: 'avatarId',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Transaction, {
        foreignKey: 'userId',
        as: 'Transaction_user',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'CommentUser',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Notification, {
        foreignKey: 'userId',
        as: 'NotificationUser',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      dob: DataTypes.DATE,
      roleId: DataTypes.INTEGER,
      avatarId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
