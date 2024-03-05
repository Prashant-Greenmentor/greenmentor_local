'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("auth_stores", {
      id: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true },
      auth_token: { type: Sequelize.STRING, allowNull: false },
      refresh_token: { type: Sequelize.STRING, allowNull: false },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      access_token_expires_at: { type: Sequelize.DATE, allowNull: false },
      refresh_token_expires_at: { type: Sequelize.DATE, allowNull: false },
      created_at: { type: Sequelize.DATE },
      modified_at: { type: Sequelize.DATE },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('auth_stores');
  }
};
