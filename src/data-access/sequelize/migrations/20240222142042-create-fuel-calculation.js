'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fuel_calculations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      calculation_method: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      ef_of_fuel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      heat_content_of_fuel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      carbon_content_of_fuel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      calculation_equation: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('fuel_calculations');
  }
};