'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsageMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsageMaster.init({
    fuel_type_id: DataTypes.BIGINT,
    required_unit_type: DataTypes.BIGINT,
    required_unit: DataTypes.BIGINT,
    usage_factor_kwh: DataTypes.DECIMAL,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'UsageMaster',
  });
  return UsageMaster;
};