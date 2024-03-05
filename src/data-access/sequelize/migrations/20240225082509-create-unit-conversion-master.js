'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UnitConversionMasters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reported_unit_type: {
        type: Sequelize.BIGINT,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
      },
      required_unit_type: {
        type: Sequelize.BIGINT,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
      },
      reported_unit: {
        type: Sequelize.BIGINT,
        references: {
          model: "unit_masters",
          key: "id",
        },
      },
      required_unit: {
        type: Sequelize.BIGINT,
        references: {
          model: "unit_masters",
          key: "id",
        },
      },
      conversion_factor: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable('UnitConversionMasters');
  }
};