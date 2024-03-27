'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electricity_emission_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electricity_emission_master.init({
    electricity_source_id: DataTypes.BIGINT,
    unit_type_id: DataTypes.BIGINT,
    unit_id: DataTypes.BIGINT,
    total_kg_co2e_per_unit: DataTypes.DECIMAL,
    kg_co2e_co2_per_unit: DataTypes.DECIMAL,
    kg_co2e_ch4_per_unit: DataTypes.DECIMAL,
    kg_co2e_n2o_per_unit: DataTypes.DECIMAL,
    kg_co2e_hfc_per_unit: DataTypes.DECIMAL,
    kg_co2e_pfc_per_unit: DataTypes.DECIMAL,
    kg_co2e_nf3_per_unit: DataTypes.DECIMAL,
    kg_co2e_sf6_per_unit: DataTypes.DECIMAL,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'electricity_emission_master',
  });
  return electricity_emission_master;
};