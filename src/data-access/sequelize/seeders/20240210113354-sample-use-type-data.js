'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('use_type_masters', [
      {
        use_type: 'Staionary',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        use_type: 'Mobile',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      // Add more sample data as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // You can remove the inserted data if needed
    await queryInterface.bulkDelete("use_type_masters", null, {});
    // Reset the ID sequence
    const tableName = "use_type_masters";
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
