'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UnitTypeMasters",
      [
        {
          unit_type: "Energy", //1
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_type: "Liquid", //2
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_type: "Volume", //3
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_type: "Weight", //4
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unit_type: "Currency", //5
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
    await queryInterface.bulkDelete("UnitTypeMasters", null, {});
    // Reset the ID sequence
    const tableName = "UnitTypeMasters";
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
