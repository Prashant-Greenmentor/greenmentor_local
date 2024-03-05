'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApprovalMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApprovalMaster.init({
    fuel_input_master_id: DataTypes.BIGINT,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'ApprovalMaster',
  });
  return ApprovalMaster;
};