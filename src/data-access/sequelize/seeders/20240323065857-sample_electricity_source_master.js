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
     "electricity_source_masters",
     [
       {
         electricity_source_id: 1,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 1,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 2,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 3,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 4,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 5,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 5,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 6,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 6,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 7,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Non Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 7,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Non Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 8,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Non Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 8,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Non Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 9,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Non Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 9,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Non Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 10,
         unit_type_id: 1,
         transaction_type: "Purchased",
         source_type: "Non Renewable",
         is_active: true,
         modified_by: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         electricity_source_id: 10,
         unit_type_id: 1,
         transaction_type: "Captive",
         source_type: "Non Renewable",
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
    await queryInterface.bulkDelete("electricity_source_masters", null, {});
    // Reset the ID sequence
    const tableName = "electricity_source_masters";
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
