'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ApprovalMasters", {
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
      fuel_input_master_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "fuel_input_masters",
          key: "id",
        },
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('ApprovalMasters', {
      fields: ['organization_id'], // Source column
      type: 'foreign key',
      references: {
        table: 'organizations', // Target table
        field: 'id', // Target column
      },
      onDelete: 'CASCADE', // Optional onDelete action
    });

    await queryInterface.addConstraint('ApprovalMasters', {
      fields: ['requested_by'], // Source column
      type: 'foreign key',
      references: {
        table: 'users', // Target table
        field: 'id', // Target column
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ApprovalMasters');
  }
};