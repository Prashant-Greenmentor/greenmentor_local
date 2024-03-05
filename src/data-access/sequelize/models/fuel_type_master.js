'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuel_type_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fuel_type_master.init(
    {
      fuel_type: DataTypes.INTEGER,
      organization_id: DataTypes.BIGINT,
      source_type: DataTypes.ENUM("non-renewable", "renewable"),
      unit_type_id: DataTypes.BIGINT,
      is_active: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      modified_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "fuel_type_master",
    }
  );
  return fuel_type_master;
};