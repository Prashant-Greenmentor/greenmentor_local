'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UnitConversionMasters",
      [
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 8,
          required_unit: 9,
          conversion_factor: 0.001,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 9,
          required_unit: 9,
          conversion_factor: 1,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 10,
          required_unit: 9,
          conversion_factor: 0.01,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 12,
          required_unit: 9,
          conversion_factor: 0.000453592,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 8,
          required_unit: 8,
          conversion_factor: 1,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 9,
          required_unit: 8,
          conversion_factor: 1000,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 10,
          required_unit: 8,
          conversion_factor: 100,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reported_unit_type: 4,
          required_unit_type: 4,
          reported_unit: 12,
          required_unit: 8,
          conversion_factor: 0.453592,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //currency - 24
          reported_unit_type: 5,
          required_unit_type: 5,
          reported_unit: 14,
          required_unit: 13,
          conversion_factor: 0.012,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //currency - 25
          reported_unit_type: 5,
          required_unit_type: 5,
          reported_unit: 13,
          required_unit: 14,
          conversion_factor: 82.9,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //currency - 26
          reported_unit_type: 5,
          required_unit_type: 5,
          reported_unit: 13,
          required_unit: 13,
          conversion_factor: 1,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy - 18
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 1,
          required_unit: 2,
          conversion_factor: 0.0000002778,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy - 19
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 2,
          required_unit: 2,
          conversion_factor: 1.0,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy - 20
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 11,
          required_unit: 2,
          conversion_factor: 277.778,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy - 21
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 1,
          required_unit: 11,
          conversion_factor: 0.000000001,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy - 22
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 2,
          required_unit: 11,
          conversion_factor: 0.004,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy - 23
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 11,
          required_unit: 11,
          conversion_factor: 1.0,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //liquid
          reported_unit_type: 2,
          required_unit_type: 2,
          reported_unit: 3,
          required_unit: 3,
          conversion_factor: 1,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //liquid
          reported_unit_type: 2,
          required_unit_type: 2,
          reported_unit: 5,
          required_unit: 3,
          conversion_factor: 158.9872949,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //liquid
          reported_unit_type: 2,
          required_unit_type: 2,
          reported_unit: 4,
          required_unit: 3,
          conversion_factor: 3.7854,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //volume
          reported_unit_type: 3,
          required_unit_type: 3,
          reported_unit: 6,
          required_unit: 7,
          conversion_factor: 0.0283168,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //volume
          reported_unit_type: 3,
          required_unit_type: 3,
          reported_unit: 7,
          required_unit: 7,
          conversion_factor: 1,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 15,
          required_unit: 2,
          conversion_factor: 1000,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 16,
          required_unit: 2,
          conversion_factor: 1000000,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 17,
          required_unit: 2,
          conversion_factor: 0.000277778,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 1,
          required_unit: 15,
          conversion_factor: 0.0000000002778,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 2,
          required_unit: 15,
          conversion_factor: 0.001,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 11,
          required_unit: 15,
          conversion_factor: 0.277778,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 15,
          required_unit: 15,
          conversion_factor: 1.0,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 16,
          required_unit: 15,
          conversion_factor: 1000,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 17,
          required_unit: 15,
          conversion_factor: 0.0000002778,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //energy
          reported_unit_type: 1,
          required_unit_type: 1,
          reported_unit: 17,
          required_unit: 11,
          conversion_factor: 0.000001,
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
    await queryInterface.bulkDelete("fuel_data", null, {});
    await queryInterface.bulkDelete("fuel_input_masters", null, {});
    await queryInterface.bulkDelete("electricity_data", null, {});
    await queryInterface.bulkDelete("electricity_input_masters", null, {});
    await queryInterface.bulkDelete("UnitConversionMasters", null, {});
    // Reset the ID sequence
    const tableName = "UnitConversionMasters";
    const tableName2 = "fuel_data";
    const resetSequenceQuery = `ALTER SEQUENCE "${tableName}_id_seq" RESTART WITH 1;`;
    const resetSequenceQuery2 = `ALTER SEQUENCE "${tableName2}_id_seq" RESTART WITH 1;`;

    try {
      await queryInterface.sequelize.query(resetSequenceQuery2);
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
