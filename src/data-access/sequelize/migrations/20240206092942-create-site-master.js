'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("site_masters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      site: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      organization_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "organizations",
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
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
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

    await queryInterface.addConstraint('site_masters', {
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
    await queryInterface.dropTable('site_masters');
  }
};