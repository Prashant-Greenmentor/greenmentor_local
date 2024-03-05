'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuel_calculation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fuel_calculation.init(
    {
      calculation_method: DataTypes.INTEGER,
      quantity: DataTypes.BOOLEAN,
      ef_of_fuel: DataTypes.BOOLEAN,
      heat_content_of_fuel: DataTypes.BOOLEAN,
      carbon_content_of_fuel: DataTypes.BOOLEAN,
      calculation_equation: DataTypes.JSONB,
      is_active: DataTypes.BOOLEAN,
      modified_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "fuel_calculation",
    }
  );
  return fuel_calculation;
};