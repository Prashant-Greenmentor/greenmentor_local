'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fuel_emission_masters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fuel_type_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "fuel_type_masters",
          key: "id",
        },
      },
      source_type: {
        type: Sequelize.STRING,
      },
      unit_type_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
      },
      unit_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "unit_masters",
          key: "id",
        },
      },
      total_kg_co2e_per_unit: {
        type: Sequelize.DECIMAL,
      },
      kg_co2e_co2_per_unit: {
        type: Sequelize.DECIMAL,
      },
      kg_co2e_ch4_per_unit: {
        type: Sequelize.DECIMAL,
      },
      kg_co2e_n20_per_unit: {
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
    await queryInterface.dropTable('fuel_emission_masters');
  }
};