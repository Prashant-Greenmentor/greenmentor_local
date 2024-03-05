'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UsageMasters",
      [
        {
          fuel_type_id: 12,
          required_unit_type: 4,
          required_unit: 8,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 12,
          required_unit_type: 2,
          required_unit: 3,
          usage_factor_kwh: 7.84,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 13,
          required_unit_type: 4,
          required_unit: 8,
          usage_factor_kwh: 13.91,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 13,
          required_unit_type: 2,
          required_unit: 3,
          usage_factor_kwh: 2.43,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 14,
          required_unit_type: 4,
          required_unit: 8,
          usage_factor_kwh: 13.91,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 14,
          required_unit_type: 2,
          required_unit: 3,
          usage_factor_kwh: 6.3,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 15,
          required_unit_type: 4,
          required_unit: 8,
          usage_factor_kwh: 13.7,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 15,
          required_unit_type: 2,
          required_unit: 3,
          usage_factor_kwh: 7.26,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 2,
          required_unit_type: 4,
          required_unit: 8,
          usage_factor_kwh: 11.63,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 2,
          required_unit_type: 2,
          required_unit: 3,
          usage_factor_kwh: 2.14,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 12,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 11.63,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 13,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 12.14,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 14,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.14,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 15,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 14.14,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fuel_type_id: 2,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 15.14,
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
    await queryInterface.bulkDelete("UsageMasters", null, {});
    // Reset the ID sequence
    const tableName = "UsageMasters";
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
