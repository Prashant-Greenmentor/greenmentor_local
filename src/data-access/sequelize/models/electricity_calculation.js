'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electricity_calculation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electricity_calculation.init(
    {
      calculation_method: DataTypes.BIGINT,
      unit_used: DataTypes.BOOLEAN,
      emission_factor: DataTypes.BOOLEAN,
      calculation_equation: DataTypes.JSONB,
      is_active: DataTypes.BOOLEAN,
      modified_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "electricity_calculation",
    }
  );
  return electricity_calculation;
};