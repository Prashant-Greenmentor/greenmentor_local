'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electricity_input_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electricity_input_master.init({
    electricity_input_data: DataTypes.JSONB,
    organization_id: DataTypes.BIGINT,
    evidence: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'electricity_input_master',
  });
  return electricity_input_master;
};