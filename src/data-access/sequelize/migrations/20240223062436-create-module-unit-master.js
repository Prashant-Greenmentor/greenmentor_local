'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("module_unit_masters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      module: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "ModuleMasters",
          key: "id",
        },
      },
      sub_module: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "SubModuleMasters",
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
      unit_type: {
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
    await queryInterface.dropTable('module_unit_masters');
  }
};