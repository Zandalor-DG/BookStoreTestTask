'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.belongsTo(models.Comment, {
        foreignKey: 'id', //сюда ложить айди коментария или то на что ссылка
      });
      Notification.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      // define association here
    }
  }
  Notification.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      payload: DataTypes.JSON,
      read: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Notification',
    }
  );
  return Notification;
};
