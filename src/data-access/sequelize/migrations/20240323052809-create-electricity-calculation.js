'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("electricity_calculations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      calculation_method: {
        type: Sequelize.BIGINT,
      },
      unit_used: {
        type: Sequelize.BOOLEAN,
      },
      emission_factor: {
        type: Sequelize.BOOLEAN,
      },
      calculation_equation: {
        type: Sequelize.JSONB,
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
    await queryInterface.dropTable('electricity_calculations');
  }
};