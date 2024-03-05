'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable("permission_master", {
      id: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true },
      module_name: { type: Sequelize.STRING, allowNull: false },
      module_code: { type: Sequelize.STRING, unique: true, allowNull: false },
      parent_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "permission_master",
          key: "id",
        },
      },
      is_active: {
        type: Sequelize.STRING,
        defaultValue: true,
        allowNull: false,
      },
      created_at: { type: Sequelize.DATE },
      modified_at: { type: Sequelize.DATE },
      modified_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('permission_master');
  }
};
