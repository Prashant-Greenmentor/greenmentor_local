'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UsageElectricityMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      electricity_source_id: {
        type: Sequelize.BIGINT
      },
      required_unit_type: {
        type: Sequelize.BIGINT
      },
      required_unit: {
        type: Sequelize.BIGINT
      },
      usage_factor_kwh: {
        type: Sequelize.DECIMAL
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      modified_by: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UsageElectricityMasters');
  }
};