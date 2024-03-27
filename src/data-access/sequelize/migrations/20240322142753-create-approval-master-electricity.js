'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ApprovalMasterElectricities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      organization_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "organizations",
          key: "id",
        },
      },
      electricity_input_master_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "electricity_input_masters",
          key: "id",
        },
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
      modified_by: {
        type: Sequelize.BIGINT,
        references: {
          model: "users",
          key: "id",
        },
      },
      requested_by: {
        type: Sequelize.BIGINT,
        references: {
          model: "users",
          key: "id",
        },
      },
      request_status: {
        type: Sequelize.ENUM("approved", "rejected", "submitted"),
        allowNull: false,
        defaultValue: "submitted",
      },
      feedback: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ApprovalMasterElectricities');
  }
};