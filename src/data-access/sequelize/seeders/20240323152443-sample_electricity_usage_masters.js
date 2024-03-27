"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UsageElectricityMasters",
      [
        {
          electricity_source_id: 1,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 2,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 3,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 4,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 5,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 6,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 7,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 8,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 9,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source_id: 10,
          required_unit_type: 5,
          required_unit: 13,
          usage_factor_kwh: 13.64,
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
    await queryInterface.bulkDelete("UsageElectricityMasters", null, {});
    await queryInterface.bulkDelete("electricity_data", null, {});
    await queryInterface.bulkDelete("scope1_scope2_summary_data", null, {});
    // Reset the ID sequence
    const tableName = "electricity_data";
    const resetSequenceQuery = `ALTER SEQUENCE "${tableName}_id_seq" RESTART WITH 1;`;
    const tableName2 = "scope1_scope2_summary_data";
    const resetSequenceQuery2 = `ALTER SEQUENCE "${tableName2}_id_seq" RESTART WITH 1;`;
    const tableName3 = "UsageElectricityMasters";
    const resetSequenceQuery3 = `ALTER SEQUENCE "${tableName3}_id_seq" RESTART WITH 1;`;

    try {
      await queryInterface.sequelize.query(resetSequenceQuery);
      await queryInterface.sequelize.query(resetSequenceQuery2);
      await queryInterface.sequelize.query(resetSequenceQuery3);
      console.log(`ID sequence of ${tableName} table reset.`);
    } catch (error) {
      console.error(
        `Error resetting ID sequence of ${tableName} table:`,
        error
      );
    }
  },
};
