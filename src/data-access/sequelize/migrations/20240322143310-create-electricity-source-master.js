'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("electricity_source_masters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      electricity_source_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "electricity_sources",
          key: "id",
        },
      },
      unit_type_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
      },
      transaction_type: {
        type: Sequelize.ENUM("Captive", "Purchased"),
        allowNull: false,
        defaultValue: "Purchased",
      },
      source_type: {
        type: Sequelize.ENUM("Renewable", "Non Renewable"),
        allowNull: false,
        defaultValue: "Non Renewable",
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
    await queryInterface.dropTable('electricity_source_masters');
  }
};