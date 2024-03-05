'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fuel_input_masters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fuel_input_data: {
        type: Sequelize.JSONB,
      },
      organization_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "organizations",
          key: "id",
        },
      },
      fuel_record_type: {
        type: Sequelize.ENUM("inventory", "purchased"),
        allowNull: false,
        defaultValue: "purchased",
      },
      evidence: {
        type: Sequelize.STRING,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      modified_by: {
        type: Sequelize.BIGINT,
        references: {
          model: "users",
          key: "id",
        },
      },
    });

    await queryInterface.addConstraint('fuel_input_masters', {
      fields: ['organization_id'], // Source column
      type: 'foreign key',
      references: {
        table: 'organizations', // Target table
        field: 'id', // Target column
      },
      onDelete: 'CASCADE', // Optional onDelete action
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fuel_input_masters');
  }
};