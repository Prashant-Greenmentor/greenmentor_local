'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ModuleMasters', [
      {
        module: 'Scope 1',
        is_active: true,
        modified_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        module: 'Scope 2',
        is_active: true,
        modified_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more sample data objects as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ModuleMasters", null, {});

    // Reset the ID sequence
    const tableName = "ModuleMasters";
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
