'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'admin',
        first_name: 'Admin',
        last_name: '',
        email: 'admin@greenementor.co',
        password: 'admin@123',
        created_at: new Date(),
        modified_at: new Date(),
      },
      // Add more sample data as needed
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    // Reset the ID sequence
    const tableName = "users";
    const resetSequenceQuery = `ALTER SEQUENCE "${tableName}_id_seq" RESTART WITH 1;`;

    try {
      await queryInterface.sequelize.query(resetSequenceQuery);
      console.log(`ID sequence of ${tableName} table reset.`);
    } catch (error) {
      console.error(
        `Error resetting ID sequence of ${tableName} table:`,
        error
      );
    }
  }
};
