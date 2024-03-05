'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class site_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
    site_master.init({
    site: DataTypes.STRING,
    organization_id: DataTypes.BIGINT,
    is_active: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    modified_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'site_master',
  });
    return site_master;
};