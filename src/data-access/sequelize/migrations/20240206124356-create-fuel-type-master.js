'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fuel_type_masters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fuel_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "FuelTypes",
          key: "id",
        },
      },
      organization_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "organizations",
          key: "id",
        },
      },
      source_type: {
        type: Sequelize.ENUM("non-renewable", "renewable"),
        allowNull: false, // Adjust this as needed
        defaultValue: "non-renewable",
      },
      unit_type_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
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

    await queryInterface.addConstraint('fuel_type_masters', {
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
    await queryInterface.dropTable('fuel_type_masters');
  }
};