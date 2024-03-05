'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "module_unit_masters",
      [
        {
          module: 1,
          sub_module: 1,
          unit_id: 1,
          unit_type: 1,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 2,
          unit_type: 1,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 3,
          unit_type: 2,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 8,
          unit_type: 4,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 9,
          unit_type: 4,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 10,
          unit_type: 4,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 12,
          unit_type: 4,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 13,
          unit_type: 5,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module: 1,
          sub_module: 1,
          unit_id: 14,
          unit_type: 5,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more sample data objects as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("module_unit_masters", null, {});
    // Reset the ID sequence
    const tableName = "module_unit_masters";
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
