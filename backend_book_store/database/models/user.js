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
      // models.File.hasOne(User, {
      //   foreignKey: 'avatarId',
      //   as: 'avatar',
      //   onDelete: 'CASCADE',
      //   /* options */
      // });
      User.hasOne(models.File, {
        foreignKey: 'id',
        //as: 'avatar',
        onDelete: 'CASCADE',
        /* options */
      });
    }
  }
  User.init(
    {
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
