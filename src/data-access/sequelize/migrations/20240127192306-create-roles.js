'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable("roles", {
      id: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true },
      role_type_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "role_master",
          key: "id",
        },
      },
      orgnization_id: { type: Sequelize.BIGINT, allowNull: false },
      permissions: { type: Sequelize.JSONB, allowNull: false },
      is_active: {
        type: Sequelize.STRING,
        defaultValue: true,
        allowNull: false,
      },
      created_at: { type: Sequelize.DATE },
      modified_at: { type: Sequelize.DATE },
      modified_by: { type: Sequelize.BIGINT, allowNull: false },
    });

    await queryInterface.addIndex('roles', {
      fields: ['role_type_id', 'orgnization_id'],
      unique: true,
      name: 'unique_role', // You can provide a name for the index
    });
  },

  async down (queryInterface, Sequelize) {

    queryInterface.dropTable('roles');
  }
};
