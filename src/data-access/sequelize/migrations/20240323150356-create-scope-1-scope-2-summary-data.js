'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scope1_scope2_summary_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organization_id: {
        type: Sequelize.BIGINT
      },
      module_id: {
        type: Sequelize.BIGINT
      },
      sub_module_id: {
        type: Sequelize.BIGINT
      },
      month: {
        type: Sequelize.STRING
      },
      quarter: {
        type: Sequelize.BIGINT
      },
      year: {
        type: Sequelize.BIGINT
      },
      site_id: {
        type: Sequelize.BIGINT
      },
      usage_in_kwh: {
        type: Sequelize.DECIMAL
      },
      total_co2e_kg: {
        type: Sequelize.DECIMAL
      },
      co2e_co2_kg: {
        type: Sequelize.DECIMAL
      },
      co2e_ch4_kg: {
        type: Sequelize.DECIMAL
      },
      co2e_n2o_kg: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('scope1_scope2_summary_data');
  }
};