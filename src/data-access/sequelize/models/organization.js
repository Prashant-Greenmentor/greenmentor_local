"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.organization.belongsTo(models.user, {
        foreignKey: "user_id",
      });
    }
  }
  organization.init(
    {
      name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      company_code: DataTypes.STRING,
      date_of_joining: DataTypes.DATE,
      is_active: DataTypes.BOOLEAN,
      user_id: DataTypes.BIGINT,
      modified_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "organization",
    }
  );
  return organization;
};
