'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuel_emission_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fuel_emission_master.init({
    fuel_type_id: DataTypes.BIGINT,
    source_type: DataTypes.STRING,
    unit_type_id: DataTypes.BIGINT,
    unit_id: DataTypes.BIGINT,
    total_kg_co2e_per_unit: DataTypes.DECIMAL,
    kg_co2e_co2_per_unit: DataTypes.DECIMAL,
    kg_co2e_ch4_per_unit: DataTypes.DECIMAL,
    kg_co2e_n20_per_unit: DataTypes.DECIMAL,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'fuel_emission_master',
  });
  return fuel_emission_master;
};