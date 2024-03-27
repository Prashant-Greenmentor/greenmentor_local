'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scope1_scope2_summary_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.scope1_scope2_summary_data.belongsTo(models.organization, {
        foreignKey: "organization_id",
      });
      models.scope1_scope2_summary_data.belongsTo(models.site_master, {
        foreignKey: "site_id",
      });
      models.scope1_scope2_summary_data.belongsTo(models.user, {
        foreignKey: "modified_by",
      });
      models.scope1_scope2_summary_data.belongsTo(models.ModuleMaster, {
        foreignKey: "module_id",
      });
      models.scope1_scope2_summary_data.belongsTo(models.SubModuleMaster, {
        foreignKey: "sub_module_id",
      });
    }
  }
  scope1_scope2_summary_data.init({
    organization_id: DataTypes.BIGINT,
    module_id: DataTypes.BIGINT,
    sub_module_id: DataTypes.BIGINT,
    month: DataTypes.STRING,
    quarter: DataTypes.BIGINT,
    year: DataTypes.BIGINT,
    site_id: DataTypes.BIGINT,
    usage_in_kwh: DataTypes.DECIMAL,
    total_co2e_kg: DataTypes.DECIMAL,
    co2e_co2_kg: DataTypes.DECIMAL,
    co2e_ch4_kg: DataTypes.DECIMAL,
    co2e_n2o_kg: DataTypes.DECIMAL,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'scope1_scope2_summary_data',
  });
  return scope1_scope2_summary_data;
};