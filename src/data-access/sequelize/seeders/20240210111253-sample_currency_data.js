'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('currency_masters', [
      {
        currency: 'USD',
        // organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        currency: 'EUR',
        // organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        currency: 'INR',
        // organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        currency: 'SAR',
        // organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        currency: 'CAD',
        // organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      {
        currency: 'AUD',
        // organization_id: 1,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        modified_by: 1
      },
      // Add more sample data as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Add logic to remove the inserted data if needed
    await queryInterface.bulkDelete("currency_masters", null, {});
    // Reset the ID sequence
    const tableName = "currency_masters";
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
