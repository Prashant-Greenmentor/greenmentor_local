'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "fuel_calculations",
      [
        {
          calculation_method: 1,
          quantity: true,
          ef_of_fuel: false,
          heat_content_of_fuel: false,
          carbon_content_of_fuel: true,
          calculation_equation: JSON.stringify({
            formula: [
              "quantity",
              "*",
              "calculate_ef",
            ],
            description: "calculation method 1",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calculation_method: 2,
          quantity: true,
          ef_of_fuel: true,
          heat_content_of_fuel: true,
          carbon_content_of_fuel: false,
          calculation_equation: JSON.stringify({
            formula: [
              "quantity",
              "*",
              "heat_content_of_fuel",
              "*",
              "calculate_ef",
            ],
            description: "calculation method 2",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calculation_method: 3,
          quantity: true,
          ef_of_fuel: false,
          heat_content_of_fuel: true,
          carbon_content_of_fuel: false,
          calculation_equation: JSON.stringify({
            formula: [
              "quantity",
              "*",
              "heat_content_of_fuel",
              "*",
              "calculate_ef",
            ],
            description: "calculation method 3",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calculation_method: 4,
          quantity: true,
          ef_of_fuel: true,
          heat_content_of_fuel: false,
          carbon_content_of_fuel: false,
          calculation_equation: JSON.stringify({
            formula: ["quantity", "*", "calculate_ef"],
            description: "calculation method 4",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calculation_method: 5,
          quantity: true,
          ef_of_fuel: false,
          heat_content_of_fuel: false,
          carbon_content_of_fuel: false,
          calculation_equation: JSON.stringify({
            formula: ["quantity", "*", "calculate_ef"],
            description: "calculation method 5",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calculation_method: 6,
          quantity: false,
          ef_of_fuel: false,
          heat_content_of_fuel: false,
          carbon_content_of_fuel: false,
          calculation_equation: JSON.stringify({
            formula: ["amount_paid", "*", "calculate_ef"],
            description: "calculation method 6",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("fuel_calculations", null, {});
    // Reset the ID sequence
    const tableName = "fuel_calculations";
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
