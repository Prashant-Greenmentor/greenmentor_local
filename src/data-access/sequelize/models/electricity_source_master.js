'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electricity_source_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electricity_source_master.init(
    {
      electricity_source_id: DataTypes.BIGINT,
      unit_type_id: DataTypes.BIGINT,
      transaction_type: DataTypes.ENUM("Captive", "Purchased"),
      source_type: DataTypes.ENUM("Renewable", "Non Renewable"),
      is_active: DataTypes.BOOLEAN,
      modified_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "electricity_source_master",
    }
  );
  return electricity_source_master;
};