'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "FuelTypes",
      [
        {
          fuel_type: "Natural Gas-100% Mineral Blend", //1
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Processed fuel oils-residual oil", //2
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Processed fuel oils-distillate oil", //3
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Refinery miscellaneous", //4
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Marine gas oil", //5
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Marine fuel oil", //6
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Biopropane", //7
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Bio Petrol", //8
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Renewable petrol", //9
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Off road biodiesel", //10
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Methanol (bio)", //11
          is_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "Butane", //12
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "CNG", //13
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "LNG", //14
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
        {
          fuel_type: "LPG", //15
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          modified_by: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // You can remove the inserted data if needed
    await queryInterface.bulkDelete("FuelTypes", null, {});
    // Reset the ID sequence
    const tableName = "FuelTypes";
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
