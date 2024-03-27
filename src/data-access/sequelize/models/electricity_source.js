'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electricity_source extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electricity_source.init({
    electricity_source: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'electricity_source',
  });
  return electricity_source;
};