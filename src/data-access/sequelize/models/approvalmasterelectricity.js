'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApprovalMasterElectricity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApprovalMasterElectricity.init({
    organization_id: DataTypes.BIGINT,
    electricity_input_master_id: DataTypes.BIGINT,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT,
    requested_by: DataTypes.BIGINT,
    request_status: DataTypes.ENUM("approved", "rejected", "submitted"),
    feedback: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApprovalMasterElectricity',
  });
  return ApprovalMasterElectricity;
};