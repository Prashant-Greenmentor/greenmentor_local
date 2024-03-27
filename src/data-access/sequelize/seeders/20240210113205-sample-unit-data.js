'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "unit_masters",
      [
        {
          unit: "Joules", //1
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "kWh", //2
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "litres", //3
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "gallons", //4
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "barrels", //5
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "cubic feet", //6
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "cubic metres", //7
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "kilograms", //8
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "tonnes", //9
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "quintals", //10
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "Gigajoules", //11
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "pounds", //12
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "USD", //13
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "INR", //14
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "MWh", //15
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "GWh", //16
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          unit: "kilojoules", //17
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },

        // Add more sample data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // You can remove the inserted data if needed
    await queryInterface.bulkDelete("unit_masters", null, {});
    // Reset the ID sequence
    const tableName = "unit_masters";
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
