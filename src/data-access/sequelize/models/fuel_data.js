'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuel_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.fuel_data.belongsTo(models.site_master, {
        foreignKey: "site_id",
      });
      models.fuel_data.belongsTo(models.FuelType, {
        foreignKey: "fuel_type_id",
      });
      models.fuel_data.belongsTo(models.use_type_master, {
        foreignKey: "use_type_id",
      });
      models.fuel_data.belongsTo(models.unit_master, {
        foreignKey: "fuel_unit_id",
      });
      models.fuel_data.belongsTo(models.organization, {
        foreignKey: "organization_id",
      });
      models.fuel_data.belongsTo(models.user, {
        foreignKey: "modified_by",
      });
      models.fuel_data.belongsTo(models.ModuleMaster, {
        foreignKey: "module_id",
      });
      models.fuel_data.belongsTo(models.SubModuleMaster, {
        foreignKey: "sub_module_id",
      });
    }
  }
  fuel_data.init(
    {
      organization_id: DataTypes.BIGINT,
      module_id: DataTypes.BIGINT,
      sub_module_id: DataTypes.BIGINT,
      bill_date: DataTypes.DATE,
      month: DataTypes.STRING,
      quarter: DataTypes.BIGINT,
      year: DataTypes.BIGINT,
      site_id: DataTypes.BIGINT,
      fuel_type_id: DataTypes.BIGINT,
      source_type: DataTypes.STRING,
      source: DataTypes.STRING,
      use_type_id: DataTypes.BIGINT,
      consumed_fuel: DataTypes.DECIMAL,
      fuel_unit_id: DataTypes.BIGINT,
      amount_paid: DataTypes.DECIMAL,
      currency_id: DataTypes.BIGINT,
      heat_content: DataTypes.DECIMAL,
      carbon_content_value: DataTypes.DECIMAL,
      evidence: DataTypes.STRING,
      status: DataTypes.STRING,
      comments: DataTypes.STRING,
      calculation_method: DataTypes.BIGINT,
      input_unit_type: DataTypes.BIGINT,
      required_unit_type: DataTypes.BIGINT,
      required_unit: DataTypes.BIGINT,
      unit_conversion: DataTypes.BIGINT,
      emission_factor: DataTypes.DECIMAL,
      total_co2e_kg: DataTypes.DECIMAL,
      co2e_co2_kg: DataTypes.DECIMAL,
      co2e_ch4_kg: DataTypes.DECIMAL,
      co2e_n2o_kg: DataTypes.DECIMAL,
      usage_required_unit: DataTypes.BIGINT,
      usage_factor: DataTypes.DECIMAL,
      usage_unit_type: DataTypes.BIGINT,
      usage_in_kwh: DataTypes.DECIMAL,
      modified_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "fuel_data",
    }
  );
  return fuel_data;
};