'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('site_masters', [
      {
        site: 'Site 1',
        organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        site: 'Site 2',
        organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        site: 'Site 3',
        organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        site: 'Site 4',
        organization_id: 1,
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
    await queryInterface.bulkDelete("site_masters", null, {});
    // Reset the ID sequence
    const tableName = "site_masters";
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
