'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Files.init({
    orignal_name: DataTypes.STRING,
    path_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Files',
  });
  return Files;
};