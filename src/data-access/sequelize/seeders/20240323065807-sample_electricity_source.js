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
      "electricity_sources",
      [
        {
          electricity_source: "Wind", //1
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Hydro", //2
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Solar", //3
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Nuclear", //4
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Biodiesel", //5
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Biomass", //6
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Coal", //7
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Gas", //8
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Diesel", //9
          is_active: true,
          modified_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          electricity_source: "Lignite", //10
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("electricity_sources", null, {});
    // Reset the ID sequence
    const tableName = "electricity_sources";
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
