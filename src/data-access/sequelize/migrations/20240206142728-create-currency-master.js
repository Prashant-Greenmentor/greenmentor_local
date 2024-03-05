'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("currency_masters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      organization_id: {
        type: Sequelize.BIGINT,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      modified_by: {
        type: Sequelize.BIGINT,
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

    await queryInterface.addConstraint('currency_masters', {
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
    await queryInterface.dropTable('currency_masters');
  }
};