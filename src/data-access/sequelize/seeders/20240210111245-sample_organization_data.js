'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "organizations",
      [
        {
          name: "Greenmentor",
          company_code: "G123",
          date_of_joining: new Date(),
          is_active: true,
          user_id: 1,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more sample data as needed
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("organizations", null, {});
    // Reset the ID sequence
    const tableName = "organizations";
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
