'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SubModuleMasters', [
      {
        module: 1,
        sub_module: 'Fuel',
        is_active: true,
        modified_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        module: 2,
        sub_module: 'Electricity',
        is_active: true,
        modified_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more sample data objects as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SubModuleMasters', null, {});
    const tableName = "SubModuleMasters";
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
