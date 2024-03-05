'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class module_unit_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  module_unit_master.init({
    module: DataTypes.BIGINT,
    sub_module: DataTypes.BIGINT,
    unit_id: DataTypes.BIGINT,
    unit_type: DataTypes.BIGINT,
    is_active: DataTypes.BOOLEAN,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'module_unit_master',
  });
  return module_unit_master;
};