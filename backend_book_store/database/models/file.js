'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // File.belongsTo(models.User, {
      //   foreignKey: 'avatarId',
      //   as: 'userAvatar',
      //   /* options */
      // });
      // File.belongsTo(models.Book, {
      //   foreignKey: 'coverId',
      //   as: 'bookCover',
      //   /* options */
      // });
      models.User.belongsTo(File, {
        foreignKey: 'avatarId',
        //as: 'userAvatar',
        /* options */
      });
      models.Book.belongsTo(File, {
        foreignKey: 'coverId',
        //as: 'bookCover',
        /* options */
      });
      // define association here
    }
  }
  File.init(
    {
      original_name: DataTypes.STRING,
      path_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return File;
};
