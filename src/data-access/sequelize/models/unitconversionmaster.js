'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnitConversionMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UnitConversionMaster.init({
    reported_unit_type: DataTypes.BIGINT,
    required_unit_type: DataTypes.BIGINT,
    reported_unit: DataTypes.BIGINT,
    required_unit: DataTypes.BIGINT,
    conversion_factor: DataTypes.DECIMAL,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'UnitConversionMaster',
  });
  return UnitConversionMaster;
};