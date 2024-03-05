'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuel_input_master extends Model {
/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fuel_input_master.init({
    fuel_input_data: DataTypes.JSONB,
    fuel_record_type:DataTypes.ENUM("purchased","inventory"),
    evidence: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    modified_by: DataTypes.BIGINT,
    organization_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'fuel_input_master',
  });
  return fuel_input_master;
};