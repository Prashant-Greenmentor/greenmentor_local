'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable("members", {
      id: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true },
      user_id: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      orgnization_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "organizations",
          key: "id",
        },
      },
      role_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "roles",
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

    await queryInterface.addIndex('members', {
      fields: ['user_id', 'orgnization_id', 'role_id'],
      unique: true,
      name: 'unique_member', // You can provide a name for the index
    });

  },

  async down (queryInterface, Sequelize) {

    queryInterface.dropTable('members');
  }
};


