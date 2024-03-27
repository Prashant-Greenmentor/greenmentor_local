'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "electricity_calculations",
      [
        {
          calculation_method: 1,
          unit_used: true,
          emission_factor: true,
          calculation_equation: JSON.stringify({
            formula: ["unit_used", "*", "emission_factor"],
            description: "calculation method 1",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calculation_method: 2,
          unit_used: true,
          emission_factor: false,
          calculation_equation: JSON.stringify({
            formula: ["unit_used", "*", "calculate_ef"],
            description: "calculation method 2",
          }),
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calculation_method: 3,
          unit_used: false,
          emission_factor: false,
          calculation_equation: JSON.stringify({
            formula: ["amount_paid", "*", "calculate_ef"],
            description: "calculation method 3",
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("electricity_calculations", null, {});
    // Reset the ID sequence
    const tableName = "electricity_calculations";
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
